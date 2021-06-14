## Delete

- Ex.: `docker rmi IMAGE_ID IMAGE_ID ...`
- You cannot remove an image which is the base of an existing container; you have to remove the container first

### Delete all images (including tagged images)

```
docker image prune -a
```

## Create image with given name

A "name" for an image is actually a **tag**, which consists of two parts

**name:tag**

where **name** is the actual name (ex.: *node*) and **tag** is something like the version, maybe semantic versioning. Tags can be implicit, ex.: "node" means "node:latest". An example of all the possible tags, given the same name (ex.: "node") is available here

https://hub.docker.com/_/node?tab=tags&page=1&ordering=last_updated

There are tens of tags for "node"!

### Example
```
docker build -t my_app:1.0.0 .
docker build --tag my_app:1.0.0 .
```
