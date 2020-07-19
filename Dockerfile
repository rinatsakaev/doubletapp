# В качестве базового образа используем образ с Node.js 13
FROM node:13

# Копируем файлы необходимые для работы приложения
COPY dist /dist
COPY dist-server /dist-server
COPY package.json /
COPY package-lock.json /

# Устанавливаем зависимости
RUN npm run deps:production

# Сообщаем, что контейнер готов принимать запросы по 80 порту
# Нужно для локального запуска контейнера, Heroku проигнорирует
ENV PORT 80
EXPOSE 80 9090

# Запускаем сервис при старте контейнера
CMD npm start
