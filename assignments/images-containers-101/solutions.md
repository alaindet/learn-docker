# Assignment solution

## 1) Create appropriate images for both apps (two separate images!)
## 5) Re-build the images - this time with names and tags

- Node app

  - Dockerfile
    ```
    FROM node:16-alpine3.11

    WORKDIR /app

    COPY package.json /app

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["node", "server.js"]
    ```

  - Command
    ```
    docker build -t ex-node .
    ```

- Python app

  - Dockerfile
    ```
    FROM python:3.9.5-alpine3.13

    WORKDIR /app

    COPY . /app

    CMD ["python", "bmi.py"]
    ```

  - Command
    ```
    docker build -t ex-python .
    ```

## 2) Launch a container for each created image
## 3) Re-create both containers and assign names to both

- Node app
  ```
  docker run --name ex-node -p 3000:3000 -d ex-node
  ```

- Python app
  ```
  docker run --name ex-python -it ex-python
  ```

### 4) Clean up (remove) all stopped (and running) containers

- Node app
  ```
  docker stop ex-node
  docker rm ex-node
  ```

- Python app
  ```
  docker stop ex-python
  docker rm ex-python
  ```

### 6) Run containers ensuring that they are removed automatically when stopped
- Node app
  ```
  docker run --name ex-node -p 3000:3000 -d --rm ex-node
  ```

- Python app
  ```
  docker run --name ex-python -it --rm  ex-python
  ```
