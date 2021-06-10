# Image layers

- When you build an image, commands in the Dockerfile create "layers" which are cached
- When you re-build an image (ex.: changing a little bit of code), cached layers are not re-executed but the first layer that breaks the cache forces any other subsequent layer to re-execute

## Example

Consider this Dockerfile

```
FROM node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]
```

When you change code and run `docker build .`, layers are cached until the command `COPY . .`, then `RUN` and `EXPOSE` are re-executed to create a new container

### Better example

```
FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 80
CMD ["node", "server.js"]
```

In this case, everything is cached until `RUN npm install` and changing code only re-executed `COPY . /app`
