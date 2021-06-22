# Utils app

It's a Node utility container

## Examples

1. (no ENTRYPOINT) Create a new project from the container onto the host machine
   ```
   docker build -t node-util .
   docker run -it -v $(pwd):/app node-util npm init
   ```

2. (with ENTRYPOINT) Create a new project from the container onto the host machine. Note the use of `init` instead of `npm init`
   ```
   docker build -t node-util .
   docker run -it -v $(pwd):/app node-util init
   ```

3. With `docker-compose.yaml`
   ```
   # docker-compose.yaml
   version: '3.8'
   services:
     npm-util:
       build: ./
       stdin_open: true
       tty: true
       volumes:
         - ./:/app
   ```
   ```
   docker-compose run --rm npm-util init
   ```
