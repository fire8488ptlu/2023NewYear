FROM node:16-alpine

WORKDIR /home/app
# 把前後端都打包進docker_container裡面
COPY ./backend ./

RUN npm install

CMD ["node","server.js"]
