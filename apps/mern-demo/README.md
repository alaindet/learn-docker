# MERN stack demo

## Usage

```
docker network create mern-net

docker run --rm -d --name mongodb-con --network mern-net mongo

cd backend

docker build -t mern-be-im .

docker run -d -p 8080:80 -e APP_PORT=80 -e APP_MONGODB_CONTAINER_NAME=mongodb-con -e APP_NAME="Goals App" --network mern-net --name mern-be-con mern-be-im
```
