FROM composer:2.1

WORKDIR /var/www/html

ENTRYPOINT [ "composer", "--ignore-platforms-reqs" ]
