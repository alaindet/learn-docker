# Laravel demo app

## Installation

```
docker-compose build composer && docker-compose run --rm composer create-project --prefer-dist laravel/laravel /home/laravel/app
```

### File permission issues (Linux-only dockerfiles)

Files created by the `php` and `composer` containers are owned by the `root` used by default. It is best to create a non-root user `laravel` to execute code and create files

- `php.dockerfile`
  ```
  FROM php:7.4-fpm-alpine
  WORKDIR /var/www/html
  COPY src .
  RUN docker-php-ext-install pdo pdo_mysql
  RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
  USER laravel
  ```

- `composer.dockerfile`
  ```
  FROM composer:2.1
  RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
  USER laravel
  WORKDIR /var/www/html
  ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
  ```

## Usage

```
# With direct logs
docker-compose up server php mysql

# Without direct logs
docker-compose up -d server php mysql
```
