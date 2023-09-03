FROM node:16

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
CMD ["npm", "start"]