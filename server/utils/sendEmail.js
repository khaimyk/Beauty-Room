const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const cron = require("node-cron");
require("dotenv").config();

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (to, subject, message, isHtml = false) => {
  try {
    // Verify we have all required credentials
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      throw new Error("Missing required OAuth2 credentials");
    }

    // Get access token with retry logic
    let accessToken;
    try {
      accessToken = await oAuth2Client.getAccessToken();
      if (!accessToken.token) {
        throw new Error("Failed to get access token");
      }
    } catch (tokenError) {
      console.error("❌ Token error:", tokenError);
      if (tokenError.response && tokenError.response.data) {
        console.error("Token error details:", tokenError.response.data);
      }
      throw new Error(
        "Failed to obtain access token. Please check your refresh token."
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      isHtml: true,
      auth: {
        type: "OAuth2",
        user: "haimyk1999@gmail.com", // Your Gmail address
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Beauty Room <haimyk1999@gmail.com>", // Use your actual email
      to,
      subject,
      ...(isHtml ? { html: message } : { text: message }),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to:", result.accepted);
    return true;
  } catch (error) {
    console.error("❌ Email sending failed:", error);

    // Specific handling for invalid_grant errors
    if (error.message.includes("invalid_grant")) {
      console.error(
        "⚠️ The refresh token might be expired or revoked. Please generate a new one."
      );
    }

    return false;
  }
};

// 🕒 Функція для планування нагадувань за 24 години
const scheduleEmailReminder = async (client, booking) => {
  if (!booking || !booking.date) return;

  const timeMatch = booking.notes?.match(/(\d{1,2}):(\d{2})/);
  if (!timeMatch) {
    throw new Error("Не вдалося визначити час запису");
  }

  const [_, hoursStr, minutesStr] = timeMatch;
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  // 2. Створюємо копію дати запису
  const bookingDate = new Date(booking.date);

  // 3. Встановлюємо правильний час запису
  bookingDate.setHours(hours, minutes, 0, 0);

  // 4. Перевіряємо чи дата запису в майбутньому
  if (bookingDate <= new Date()) {
    console.log("⏳ Час нагадування вже минув");
    return false;
  }

  // 5. Розраховуємо час нагадування
  const reminderDate = new Date(bookingDate);
  reminderDate.setHours(reminderDate.getHours() - 24);

  if (reminderDate <= new Date()) {
    console.log(
      `⏳ До запису залишилося менше ${24} годин. Будь ласка, оберіть менший проміжок часу.`
    );
    return false;
  }

  console.log(
    `⏰ Заплановано email-нагадування на ${reminderDate} для ${client.nickName}`
  );

  const services = booking.services?.map((s) => s.name).join(", ") || "";
  const dateStr = bookingDate.toISOString().split("T")[0];
  const emailMessage = `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9fafb; color: #111;">
    <h2 style="color: #f59e0b;">🔔 Нагадування / Reminder / Przypomnienie</h2>

    <p>
      🇺🇦 Це нагадування про ваш запис на завтра.<br />
      🇬🇧 This is a reminder for your appointment tomorrow.<br />
      🇵🇱 To przypomnienie o jutrzejszej wizycie.
    </p>

    <table style="font-size: 15px; margin-top: 16px; line-height: 1.6;">
      <tr>
        <td>👤</td>
        <td>
          <strong>Майстер:</strong> ${booking.user?.name}<br />
          <strong>Master:</strong> ${booking.user?.name}<br />
          <strong>Fryzjer:</strong> ${booking.user?.name}
        </td>
      </tr>
      <tr>
        <td>🛠️</td>
        <td>
          <strong>Послуга:</strong> ${services}<br />
          <strong>Service:</strong> ${services}<br />
          <strong>Usługa:</strong> ${services}
        </td>
      </tr>
      <tr>
        <td>📅</td>
        <td>
          <strong>Дата:</strong> ${dateStr}<br />
          <strong>Date:</strong> ${dateStr}<br />
          <strong>Data:</strong> ${dateStr}
        </td>
      </tr>
      <tr>
        <td>🕒</td>
        <td>
          <strong>Час:</strong> ${booking.notes}<br />
          <strong>Time:</strong> ${booking.notes}<br />
          <strong>Godzina:</strong> ${booking.notes}
        </td>
      </tr>
    </table>

    <p style="margin-top: 24px; font-size: 14px; color: #6b7280;">
      📍 Локація: <strong>${booking.branch?.name}</strong><br />
      📍 Location: <strong>${booking.branch?.name}</strong><br />
      📍 Miejsce: <strong>${booking.branch?.name}</strong>
    </p>

    <p style="margin-top: 32px;">
      З нетерпінням чекаємо зустрічі!<br />
      See you soon!<br />
      Do zobaczenia! 💅
    </p>
  </div>
`;

  cron.schedule(
    `${reminderDate.getMinutes()} ${reminderDate.getHours()} ${reminderDate.getDate()} ${
      reminderDate.getMonth() + 1
    } *`,
    async () => {
      try {
        await sendEmail(
          client.nickName,
          "⏰ Нагадування про запис (за 24 години)",
          emailMessage,
          true
        );
      } catch (error) {
        console.error("Помилка відправки нагадування:", error);
      }
    },
    { scheduled: true, timezone: "Europe/Warsaw" }
  );
};

module.exports = { sendEmail, scheduleEmailReminder };
