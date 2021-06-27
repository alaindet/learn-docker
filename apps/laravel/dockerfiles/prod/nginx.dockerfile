FROM nginx:1.20.1-alpine

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf .

RUN mv nginx.conf default.conf

COPY app /var/www/html
