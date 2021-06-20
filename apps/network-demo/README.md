# Network demo app

This app "speaks" with both the internet and a local running instance of MongoDB on port 27017

## Usage

```
docker build -t nets-img .
```

```
docker network create nets-net
```

```
docker run --name mongodb-con -d --network nets-net mongo
```

```
docker run --name nets-con -d -e MONGODB_CONTAINER_NAME=mongodb-con --network nets-net --rm -p 3000:3000 nets-img
```

### Notes
- The `--port / -p` flag of `docker run` is only needed to communicate between a container and the host machine (or the internet), but it is not needed to communicate between containers in the same network
- This is the reason why the `mongodb` container does not need to expose any port to communicate with the app
