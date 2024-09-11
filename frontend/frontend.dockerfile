FROM node:20-alpine

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]