FROM node:12

WORKDIR /app/whats-song

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
