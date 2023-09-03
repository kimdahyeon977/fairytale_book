FROM node:16

WORKDIR /app

COPY ../fairytale_book/fairy_book_front/package.json .
RUN npm install
COPY ../fairy_book_front .
EXPOSE 3000
CMD ["npm", "start"]