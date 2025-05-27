# 📘 Fullstack Booking Management System

> **Author:** Valentyn Khaimyk  
> **License:** Private. All rights reserved.

---

## 🌍 ENGLISH

### 📦 The Fullstack Project Consists of Two Parts:

- **Client Side (Frontend)** – React App with Admin Panel  
- **Server Side (Backend)** – Node.js + Express API with Prisma ORM  

---

## 🎨 Frontend – Client

A React 18 + Vite-based SPA that supports internationalization, animations, and modern UI/UX principles.

### 🛠 Technologies

- **Vite** – Build tool  
- **React 18 + TypeScript**  
- **Redux Toolkit** – Global state  
- **Tailwind CSS** – Styling  
- **i18next** – Internationalization  
- **React Router v7** – Navigation  
- **React Hook Form** – Forms  
- **Vitest** – Component testing  

### 📚 Additional Libraries

- **React Toastify** – Notifications  
- **React Icons / Heroicons** – Icons  
- **HeroUI** – React UI component library  

### 🧹 Code Quality

- **ESLint + Prettier** – Linting & formatting  
- **Vitest + Testing Library** – Unit tests  

---

### 🧑‍💼 Admin Panel

Role-based pages and components for:

- **Master**  
- **Administrator**  
- **Super Administrator**

#### 💼 Admin Capabilities

- Manage bookings  
- Add/edit services  
- Manage branches  
- View clients  
- Create/edit calendar  
- Role management (Admin/Super Admin)

### 📁 Directory – `client/src`

client/src/
- **app/**  Redux store & API
- **components/** Reusable components (admin, booking, etc.)
- **features/** Business logic
- **locales/** Translations (en, pl, ukr)
- **middleware/** Guards
- **pages/** SPA pages
- **utils/** Helpers


---

## 🖥 Backend – Server

Node.js backend with Express and Prisma. Includes authentication, scheduling, email/Telegram notifications, and integrations.

### 🛠 Technologies

- **Express.js** – HTTP API  
- **Prisma ORM** – DB layer  
- **JWT + BcryptJS** – Authentication  
- **CORS / Joi / dotenv** – Configuration  
- **Nodemailer** – Email delivery  
- **Telegram Bot API** – Notifications  
- **node-cron** – Scheduler  

### 🔔 Notification Features

- ✉️ Email: Confirmation, cancellation, reminders  
- 📢 Telegram Bot:
  - New bookings
  - Changes/cancellations
  - Client lists  
- ⏰ Pre-appointment reminders (customizable)

### 📁 Directory – `server/`

server/
- **bin/** Entry point
- **controllers/** Route logic
- **routes/** API endpoints
- **middleware/** Auth, validation, error handler
- **prisma/** Prisma config & client
- **test/** Tests
- **utils/** Helpers
- **scripts/** Automation
- **views/** Emails


### 🧪 Code Quality

- **Jest + Supertest + Sinon** – API and logic testing  
- **Mocha + Chai** – Optional test stack  
- **Nodemon** – Auto-reload on change  

---

## 🚀 Deployment & Docker

- `Dockerfile` for both frontend and backend  
- `docker-compose.yml` to run everything together  
- `Nginx` config for reverse proxy  
- `.env` files for environment configuration  

---

## 🇺🇦 УКРАЇНСЬКА

### 📦 Проєкт складається з двох частин:

- **Клієнтська частина (Frontend)** — React-додаток з адмінпанеллю  
- **Серверна частина (Backend)** — Node.js + Express API з Prisma ORM  

---

## 🎨 Frontend – Client

SPA-додаток на основі Vite та React 18 з підтримкою багатомовності, анімацій та сучасного UI/UX.

### 🛠 Технології

- **Vite** — збірка  
- **React 18 + TypeScript**  
- **Redux Toolkit** — глобальний стан  
- **Tailwind CSS** — стилі  
- **i18next** — багатомовність  
- **React Router v7** — навігація  
- **React Hook Form** — форми  
- **Vitest** — тестування  

### 📚 Додаткові бібліотеки

- **React Toastify** — сповіщення  
- **React Icons / Heroicons** — іконки  
- **HeroUI** — бібліотека UI-компонентів  

### 🧹 Інструменти якості коду

- **ESLint + Prettier** — лінтинг і форматування  
- **Vitest + Testing Library** — юніт-тести  

---

### 🧑‍💼 Панель адміністратора

Компоненти і сторінки для ролей:

- **Майстер**  
- **Адміністратор**  
- **Супер-адміністратор**

#### 💼 Можливості адмінки

- Керування бронюваннями  
- Додавання/редагування послуг  
- Керування філіалами  
- Перегляд клієнтів  
- Календар  
- Управління ролями  

### 📁 Структура – `client/src`

client/src/
- **app/** Redux store та API
- **components/** UI-компоненти
- **features/** Бізнес-логіка
- **locales/** Переклади
- **middleware/** Guard-и
- **pages/** Сторінки SPA
- **utils/** допоміжна логіка


---

## 🖥 Backend – Server

Node.js + Express сервер з Prisma ORM. Підтримує автентифікацію, планування задач, повідомлення через Telegram і email.

### 🛠 Технології

- **Express.js** — HTTP API  
- **Prisma ORM** — база даних  
- **JWT + BcryptJS** — безпека  
- **CORS / Joi / dotenv** — конфігурація  
- **Nodemailer** — email  
- **Telegram Bot API** — бот  
- **node-cron** — планувальник  

### 🔔 Повідомлення

- ✉️ Email: підтвердження, скасування, нагадування  
- 📢 Telegram:
  - Нові бронювання
  - Зміни
  - Список клієнтів  
- ⏰ Автонагоджувані нагадування

### 📁 Структура – `server/`

server/
- **bin/** Точка входу
- **controllers/** Логіка роутів
- **routes/** API
- **middleware/** Перевірки
- **prisma/** База даних
- **test/** Тести
- **utils/** допоміжна логіка
- **scripts/** Скрипти
- **views/** Email шаблони


### 🧪 Якість коду

- **Jest + Supertest + Sinon** — тестування  
- **Mocha + Chai** — альтернатива  
- **Nodemon** — авторестарт  

---

## 📦 Розгортання та Docker

- `Dockerfile` для frontend і backend  
- `docker-compose.yml` — запуск усіх сервісів  
- `Nginx` — зворотній proxy  
- `.env` — змінні середовища  

