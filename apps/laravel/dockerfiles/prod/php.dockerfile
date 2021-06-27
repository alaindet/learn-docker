FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

COPY app .

RUN chown -R laravel:laravel /var/www/html

USER laravel

EXPOSE 9000
