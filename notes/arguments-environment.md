# ARGuments and ENVironment variables

Docker allows you to provide build-time *arguments* and run-time *environment variables* to containers

## Build Arguments

- They are available to the instructions inside the `Dockerfile` but not inside the `CMD` command or in any application/container code
- Arguments are provided with `docker build` via the `--build-arg` option or via `ARG` instruction in the `Dockerfile`, hence they're not accessed by the container, only by the image

## Environment variables

- They are available inside the `Dockerfile` but also inside the container
- They are set with the `--env` or `-e` option of the `docker run` command
- They can be set in a `.env` file inside the same folder of the `Dockerfile`
- Env vars declared in the `docker run` command override any env var declared inside a `Dockerfile`
