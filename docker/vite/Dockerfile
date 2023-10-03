FROM node:alpine

WORKDIR /usr/src/app

ADD . .

RUN yarn install

CMD ["npm", "run", "front:dev"]
