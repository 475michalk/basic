FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --only=development
COPY . .
EXPOSE 3000
CMD [ "npm","run","start"]