# Volumes

There are two types of data storage in Docker

1. **Volumes** (*Managed by Docker*)
   - Anonymous volumes
   - Named volumes
2. **Bind Mounts** (*Managed by you*)

- Docker manages paths on your machine (which are not explicit) and maps them to anonymous and named volumes
- Volumes are accessed via `docker volume`

## Anonymous volumes
- *Anonymous volumes* are created automatically when a container is created and they are removed when the same container is removed
- *Anonymous volumes* can be created via `docker run` (Ex.: `docker run -v SOME_CONTAINER_PATH`) but also via `Dockerfile`, ex.:
  ```
  FROM node
  # ...
  VOLUME [ "/home/node/app/node_modules"]
  CMD ["npm", "start"]
  ```
- They are exclusively available from that container only
- They persist as long as the container exists (they survive when using `docker stiop` and `docker start`, but they are destroyed when using `docker run --rm` or `docker rm CONTAINER_ID`)
- They cannot be shared by any two containers
- They have a *perfect use case* when you want to lock some container's data and resist overwriting from named volumes and bind mounts
- They are preferrable when having third-party dependencies (Ex.: **node_modules**) so that the container can delegate this data to the host machine

## Named volumes
- They are perfect for persistent data between multiple containers
- They are created only while creating a container but they *survive* a container, meaning any other container (including the one that created the volume) can access that volume
- They can be accessed by multiple running containers at the same time
- They cannot be created in a `Dockerfile` like *Anonymous Volumes* but they **MUST** be created inside a `docker run` command (Ex.: `docker run ... -v VOLUME_NAME:SOME_CONTAINER_PATH`)
- They can be removed only with a dedicated command `docker volume rm VOLUME_ID`

## Bind mounts
- The best use is in *development mode* since you are mapping a folder from the host machine directly inside the container
- They look like aliases used in *named volumes*, but they are not tied to any creating container and the aliases are actually **absolute paths**
- They can be shared by multiple containers
- They are very limited compared to named volumes, since
  - They are completely managed by the user
  - You cannot manage it with any Docker command
  - They rely on the host machine file system (using absolute paths)

## List all volumes

`docker volume ls`

## Create a container with a named volume attached

`docker run -d -p 3000:80 --rm --name my_container -v vol_name:/app/feedback my_image`

It creates a `vol_name` named volume and links it to the `/app/feedback` path inside the container.

## Remove volumes

- Remove one
  ```
  docker volume rm VOLUME_NAME_OR_ID
  ```
- Remove all
  ```
  docker volume prune
  ```

## Bind Mounts

- Similar to volumes, but links between containers and the host machine are *clear* and *explicit*
- Allows for persistence and editability (ex.: for source code)
- Handled by the developer

### Create a bind mount with the source code

```
docker run -d -p 3000:80 --rm --name volumes-app -v my_volume:/app/feedback -v "SOME_ABSOLUTE_PATH:SOME_CONTAINER_PATH" volumes
```

where `SOME_ABSOLUTE_PATH` is an absolute path on your machine (cannot be relative) and `SOME_CONTAINER_PATH` is a path inside your container where to alias `SOME_ABSOLUTE_PATH`

- It's better to wrap the definition of a bind mount inside quotes since it contains an absolute path
- Instead of an absolute path, you can use some variables like
  - macOS / Linux `-v $(pwd):/app`
  - Windows `-v "%cd%":/app`

#### Node.js example

1. ```
   cd /apps/volumes-demo
   ```
2. ```
   docker build -t vols-im .
   ```
3. ```
   docker run -d -p 3000:8080 --rm --name vols-co -v /home/node/app/node_modules -v /home/app/storage/temp -v $(pwd):/home/node/app:ro -v vols-vo:/home/node/app/public/files vols-im
   ```
   This command creates a container named `vols-co` from an image `vols-im` in detached mode, mapping port 3000 of host to port 80 of container. It then binds a volume named `vols-vo` to the folder `/app/feedback` of the container, then binds the host current folder (`"%cd%"` on Windows) to the `/app` on the container, then creates an anonymous volume attached to the `/app/node_modules` container folder in order to preserve it

### Read-only bind mounts
- If you add a third argument `ro` to a bind mount declaration, it becomes read-only so that the container cannot write into it, only the host machine can write on it. (ex.: `$(pwd):/app:ro`)
