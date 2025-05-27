(EN) The Fullstack project consists of two parts:

Client Side (Frontend) – React App with Admin Panel
Server Side (Backend) – Node.js + Express API with Prisma ORM
Frontend – Client
This is the client-side part of the project, built using Vite and React 18. It uses Redux Toolkit for global state management, supports internationalization, form validation, animations, and follows a modern UI/UX approach.

Technologies:
Vite (build tool)

React 18 + TypeScript

Redux Toolkit (global state)

Tailwind CSS (styling)

i18next (internationalization)

React Router v7 (navigation)

React Hook Form (forms)

Vitest (testing)

Additional Libraries:
React Toastify — notifications

React Icons / Heroicons — icon libraries

HeroUI — component library for React

Code Quality Tools:
ESLint + Prettier — linting and formatting

Vitest + Testing Library — unit tests for components

Admin Panel:
The frontend includes dedicated components and pages for:

Master

Administrator

Super Administrator

Admin Panel Capabilities:
Booking management

Adding / editing services

Branch management

Client overview

Calendar creation / editing

Role management by Super Admin and Admin

Directory Structure – client/src:
app/ — Redux store and API

components/ — reusable UI components (admin, booking, superAdmin, header, input, button, etc.)

features/ — business logic

locales/ — translations (en, pl, ukr)

middleware/ — custom guards

pages/ — SPA pages

utils/ — helper functions

Backend – Server
This is the backend part of the project, built with Node.js and Express, using Prisma ORM. It includes authentication, task scheduling, integrations with Telegram and Google, email notifications, validation, and security.

Technologies:
Express.js — HTTP API

Prisma ORM — database interaction

JWT + BcryptJS — authentication and security

CORS / Joi / dotenv — request handling and configuration

Nodemailer — sending emails

Telegram Bot API — Telegram bot integration

node-cron — task scheduler

Notification Features:
✉️ Email notifications:

Booking confirmation

Cancellation

Reminders

📢 Telegram Bot sends messages to admins and masters:

New bookings

Cancellations/changes

Client list

⏰ Automated reminders before client appointments (with configurable timing)

Directory Structure – server:
controllers/ — route logic

routes/ — API endpoints

middleware/ — auth, validation, error handling

prisma/ — database configuration and client

test/ — tests

utils/ — helper logic

scripts/ — automation scripts

views/ — email templates or views

bin/ — entry point (www)

Code Quality Tools:
Jest + Supertest + Sinon — logic and API testing

Nodemon — automatic restart during development

Mocha + Chai — alternative test stack

Project Architecture
Frontend: A Single Page Application with API integration, animations, responsive design, multilingual support, and UI components. Includes roles: User, Administrator, Super Administrator.

Backend: RESTful API with authentication, task scheduling, email notifications, Telegram bot, reminders, and third-party integrations.

Deployment & Docker
Dockerfiles for both frontend and backend

docker-compose.yml to run client, server, and database together

Nginx config — reverse proxy for the client

.env files — environment settings

Author
Valentyn Khaimyk

📄 License
This project is private. All rights reserved.




(UA) Проект складається з двох частин:

Клієнтська частина (Frontend) – React-додаток з адмін-панеллю.
Серверна частина (Backend) – Node.js + Express API з Prisma ORM.

Frontend - Client
Це клієнтська частина проекту, створена з використанням Vite та React 18. Для керування глобальним станом використовується Redux Toolkit, підтримується інтернаціоналізація, валідація форм, анімації та сучасний UI/UX підхід.

Технології:
Vite (збірка)
React 18 + TypeScript
Redux Toolkit (глобальний стан)
Tailwind CSS (стилі)
i18next (багатомовність)
React Router v7 (навігація)
React Hook Form (форми)
Vitest (тестування)

Додаткові бібліотеки:
React Toastify — сповіщення
React Icons / Heroicons — іконки
HeroUi (бібліотека інтерфейсу React)

Інструменти якості коду:
ESLint + Prettier — лінтинг і форматування
Vitest + Testing Library — юніт-тести компоненти

Панель адміністратора:
У фронтенді реалізовано окремі компоненти та сторінки для майстра, адміністратора та супер-адміністратора.

admin/ — компоненти для адмінпанелі
superAdmin/ — компоненти для розширеного адміністрування
homeAdmin.tsx — сторінка домашньої панелі адміністратора

Можливості адмінки:
 Управління бронюваннями
 Додавання / редагування послуг
 Керування філіалами 
 Перегляд клієнтів
 Створення / редагування календаря
 Налаштування прав супер-адміністратором і адміністратором

 Структура каталогу client/src:
app/ — Redux store та API
components/ — компоненти (admin, booking, superAdmin, header, input, button, тощо)
features/ — бізнес-логіка
locales/ — багатомовні тексти (en, pl, ukr)
middleware/ — кастомні guard-и
pages/ — сторінки (SPA)
utils/ — допоміжні функції

Backend — server
Це серверна частина проекту, створена на Node.js та Express з Prisma ORM. Включає автентифікацію, планування задач, інтеграції з Telegram та Google, email-розсилки, захист і валідацію.

Технології:
Express.js — HTTP API
Prisma ORM — робота з базами даних
JWT + BcryptJS — автентифікація та безпека
CORS / Joi / dotenv — обробка запитів та конфігурація
Nodemailer — надсилання email
Telegram Bot API — інтеграція з Telegram ботом
node-cron — планувальник задач

Реалізовані функції сповіщень:
✉️ Email-сповіщення підтвердження бронювання, скасування, нагадування
📢 Telegram-бот надсилає адміністратору і майстру:
нові бронювання
скасування/зміни
список клієнтів
Автоматичні нагадування перед записом клієнта (налаштовується час заздалегідь)

Структура каталогу server:
controllers/ — логіка роутів
routes/ — ендпоінти API 
middleware/ — auth, валідація, errorHandler
prisma/ — конфігурація та клієнт бази даних
test/ — тести
utils/ — допоміжна логіка
scripts/ — автоматизація
views/ — шаблони або email
bin/ — точка входу www

Інструменти якості коду:
Jest + Supertest + Sinon — тестування логіки та API
Nodemon — автоматичний рестарт під час розробки
Mocha + Chai — альтернативний стек тестування


Архітектура проєкту
Frontend: Single Page Application з інтеграцією API, анімаціями, адаптивністю, багатомовністю та UI-компонентами. Містить ролі користувача, адміністратора та супер-адміністратора.
Backend: RESTful API з автентифікацією, планувальником задач, email-розсилками, Telegram ботом, нагадуваннями та інтеграціями.

Розгортання та Docker
Dockerfile для frontend та backend
docker-compose.yml для одночасного запуску клієнта, сервера та бази даних
Nginx конфіг — зворотній proxy для клієнта
.env файли — налаштування середовища

Автор
Valentyn Khaimyk

✉️ Ліцензія
Цей проєкт є приватним. Усі права захищені.
