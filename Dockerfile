FROM node:latest

WORKDIR /app
COPY . .

ENV PORT=3000
RUN npm install

EXPOSE $PORT
CMD ["npm", "run", "dev"]