# MERN stack demo

## Usage

```
docker network create mern-net

docker run --rm -d --name mongodb-con --network mern-net mongo

cd backend

docker build -t mern-be-im .

docker run -d --name mern-be-con -p 3001:80 -e APP_MONGODB_CONTAINER_NAME=mongodb-con -e APP_PORT=80 -e APP_NAME="Goals app" --network mern-net mern-be-im
```
