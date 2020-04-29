FROM mysql:5.7

ENV MYSQL_USER: root\
    MYSQL_DATABASE: users \
    MYSQL_ROOT_PASSWORD: secret
        
VOLUME /apps/docker/mysql /var/lib/mysql

COPY ./test-dump.sql /docker-entrypoint-initdb.d/

EXPOSE 3306



FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
