# MERN stack demo

## Usage

```
docker network create mern-net

docker run --rm -d --name mongodb-con -v mern-mongo-data:/data/db -e MONGO_INITDB_ROOT_USERNAME=foobar -e MONGO_INITDB_ROOT_PASSWORD=foobar --network mern-net mongo

cd backend

docker build -t mern-be-im .

docker run --rm -d -p 8080:80 -e APP_PORT=80 -e APP_MONGODB_CONTAINER_NAME=mongodb-con -e APP_NAME="Goals App" -e APP_MONGODB_USERNAME=foobar -e APP_MONGODB_PASSWORD=foobar --network mern-net --name mern-be-con -v /app/node_modules -v $(pwd):/app -v mern-logs:/app/storage/logs mern-be-im

cd frontend

docker build -t mern-fe-im .

# -it flag is needed by Webpack development server
docker run --name mern-fe-con -p 3000:3000 --rm -d -it mern-fe-im
```

### Notes

- Even if the frontend and the backend are in the same network, you **HAVE TO** publish both the backend's and frontend's ports because communication happens in the browser
- You can skip the network flag when running the frontend container
