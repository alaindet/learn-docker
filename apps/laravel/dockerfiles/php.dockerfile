FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# If no CMD is declared, the CMD from the image is used
# This image's CMD invokes the php interpreter
