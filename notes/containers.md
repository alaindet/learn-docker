- `docker run` creates a **NEW** container based on an image
- `docker run` executes in **attached** mode (foreground, you see the output), while `docker start` executes in **detached** mode (background)
- If you already created a container
  1. run `docker ps -a`
  2. find your container
  3. run `docker start NAME` ex.: `docker start priceless_saha`

## Detached mode

It means you are not listening to the output of the container

- Example: `docker run -p 8000:80 -d  2ddf2erdashj`
- You can listen to running detached containers with `docker container attach CONTAINER_NAME`
- You can start a container in attached mode with `docker start -a CONTAINER_NAME`

## Logs

If you want to take a look at all the logs printed by a container so far without losing the terminal prompt, run

```
docker logs CONTAINER_NAME
```

If you want to look at logs and keep listening, you can *follow* with

```
docker logs -f CONTAINER_NAME
```

## Remove

- Use `docker rm` to remove containers
- You cannot remove a running container, you have to stop them first
- You can delete multiple containers with `docker rm NAME1 NAME2`
- You can remove **ALL** stopped containers with `docker container prune`

### Automatically remove

- The flag `--rm` of `docker run` allows to automatically remove containers that exited

### Copy files into containers

#### From host to container

- Copy files from external inside containers, like `docker cp SOURCE_FOLDER CONTAINER_IMAGE:/DESTINATION_FOLDER`
- Example: `docker cp assets/. cranky_diffie:/assets_folder`

#### From container to host

```
docker cp cranky_diffie:/assets_folder from_container
```
