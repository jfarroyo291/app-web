FROM mongo-express

EXPOSE 8000

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["npm", "start"]