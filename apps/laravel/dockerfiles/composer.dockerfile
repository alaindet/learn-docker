FROM composer:2.1

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER root

WORKDIR /home/laravel

ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
