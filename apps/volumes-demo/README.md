# File creator demo

This file serves as a simple Node app to create text files in order to test Docker volumes.

## Usage

1. Move to this folder (if not already)
   ```
   cd /apps/volumes-demo
   ```

2. Build the image
   ```
   docker build -t vols-im .
   ```
  
3. Create a temporary container from previously created image
   ```
   docker run -d -p 3000:80 --rm --name vols-co -v /home/node/app/node_modules -v $(pwd):/home/node/app:ro -v vols-vo:/home/node/app/public/files vols-im
   ```

4. Visit `http://localhost:3000` on your host machine to use the application

5. Once finished, stop it with
   ```
   docker stop vols-co
   ```

6. **(Bonus)** You can check any error from the container's console with
   ```
   docker logs vols-co
   ```

## Changing environment variables

The `Dockerfile` already has some environment variables defined, with default values. These are the currently available environment variables for this app with default values

- `APP_PORT` = 80

For example, in order to change `APP_PORT` to 8081, just run this at point 3.

```
docker run -d -p 3000:8081 --rm --name vols-co --env APP_PORT=8081 -v /home/node/app/node_modules -v $(pwd):/home/node/app:ro -v vols-vo:/home/node/app/public/files vols-im
```

- You can shorten the `--env` flag with the shorthand `-e` flag
- Multiple environment variables can be set in `docker run` by using multiple `-e` flags, ex.: `docker run ... -e QUESTION=6x9 -e ANSWER=42`
- You can specify a file containing environment variables with `docker run ... --env-file PATH_TO_ENV_FILE`

## Create a dev environment

```
docker build -t vols-im:dev --build-arg DEFAULT_APP_PORT=8080 .
```
```
docker run -d -p 3000:8080 --rm --name vols-co--dev -v /home/node/app/node_modules -v $(pwd):/home/node/app:ro -v vols-vo--dev:/home/node/app/public/files vols-im:dev
```
