FROM node:20-bullseye

# Встановлюємо залежності для Prisma
RUN apt-get update && apt-get install -y openssl

WORKDIR /app

# Копіюємо package.json та встановлюємо залежності
COPY package*.json ./
RUN npm ci

# Копіюємо Prisma схему та генеруємо клієнт В КОНТЕЙНЕРІ
COPY prisma ./prisma
RUN npx prisma generate
# Копіюємо решту додатка
COPY . .

EXPOSE 8000
CMD ["npm", "run", "server"]