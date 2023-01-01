FROM node:latest

WORKDIR /src

COPY ./src /src

RUN npm install

CMD ["node", "app.js"]