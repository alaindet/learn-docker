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