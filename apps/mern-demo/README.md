# MERN stack demo

This is a fullstack JavaScript application using Node/Express, Mongo DB and React. This setup is a *development* setup as it uses *nodemon* on the backend and the *webpack development server* on React. The setup allows for live coding both the backend and the frontend via Docker's **bind mounts**

## Usage without `docker-compose`

```
# Create network
docker network create mern-net

# Download MongoDB 4.4.6-bionic

# Run MongoDB
docker run --rm -d --name mongodb-con -v mern-mongo-data:/data/db -e MONGO_INITDB_ROOT_USERNAME=foobar -e MONGO_INITDB_ROOT_PASSWORD=foobar --network mern-net mongo:4.4.6-bionic

# Move to backend
cd backend

# Build backend image
docker build -t mern-be-im .

# Run backend container
docker run --rm -d -p 8080:80 -e APP_PORT=80 -e APP_MONGODB_CONTAINER_NAME=mongodb-con -e APP_NAME="Goals App" -e APP_MONGODB_USERNAME=foobar -e APP_MONGODB_PASSWORD=foobar --network mern-net --name mern-be-con -v /app/node_modules -v $(pwd):/app -v mern-logs:/app/storage/logs mern-be-im

# Move to frontend
cd ../frontend

# Build frontend image
docker build -t mern-fe-im .

# Run frontend container
# -it flag is needed by Webpack development server
docker run --name mern-fe-con -v $(pwd)/src:/app/src -p 3000:3000 --rm -d -it mern-fe-im

# Stop everything
docker stop mern-fe-con mern-be-con mongodb-con
```

### Notes

- Even if the frontend and the backend are in the same network, you **HAVE TO** publish both the backend's and frontend's ports because communication happens in the browser
- You can skip the network flag when running the frontend container

## Usage with `docker-compose`

```
# Starts every service in detached mode
docker-compose up -d

# Removes volumes as well
docker-compose down -v
```
