FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

# COPY . .

RUN docker-php-ext-install pdo pdo_mysql

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel

EXPOSE 9000

# If no CMD is declared, the CMD from the image is used
# This image's CMD invokes the php interpreter
