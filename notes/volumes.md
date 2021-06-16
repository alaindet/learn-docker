# Volumes

There are two types of data storage in Docker

1. **Volumes** (*Managed by Docker*)
   - Anonymous volumes
   - Named volumes
2. **Bind Mounts** (*Managed by you*)

- Docker manages paths on your machine (which is not explicit) and maps them to anonymous and named volumes
- Volumes are accessed via `docker volume`
- *Anonymous volumes* are created automatically when a container is created and removed automatically **ONLY IF** the container was created via `--rm`
- Otherwise, anonymous volumes just fall into a limbo since new containers create new anynomous volumes automatically and should be removed
- *Named volumes* are perfect for persistent data which you don't need to edit directly, they are created while creating a container but they *survive* a container, meaning any other container (including the one that created the volume) can access that volume

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

- Similar to volumes, but links between containers and the host OS are *clear* and *explicit*
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
   docker run -d -p 3000:80 --name vols-co -v vols-vo:/app/feedback -v "R:\projects\learn-docker\apps\volumes-demo:/app" -v /app/node_modules vols-im
   ```
   This command creates a container named `vols-co` from an image `vols-im` in detached mode, mapping port 3000 of host to port 80 of container. It then binds a volume named `vols-vo` to the folder `/app/feedback` of the container, then binds the host current folder (`"%cd%"` on Windows) to the `/app` on the container, then creates an anonymous volume attached to the `/app/node_modules` container folder in order to preserve it
