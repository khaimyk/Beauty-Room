const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const TOKEN_PATH = "token.json";

// Завантажуємо креденшіали
const credentials = require("./utils/client_id.json");
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Генеруємо URL для отримання токену
const getNewToken = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  console.log("🔗 Перейдіть за цим посиланням для авторизації:", authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("📥 Вставте код авторизації: ", async (code) => {
    rl.close();
    try {
      const { tokens } = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(tokens);

      // Зберігаємо токен у файл
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
      console.log("✅ Токен успішно збережено!");
    } catch (error) {
      console.error("❌ Помилка отримання токену:", error);
    }
  });
};

// Виконуємо отримання токену
getNewToken();
