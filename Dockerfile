FROM node:12

WORKDIR /app/whats-song

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 8080

CMD [ "node", "index.js" ]
