FROM node:alpine

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]