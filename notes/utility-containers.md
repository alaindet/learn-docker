# Utility Containers

- It's not an official term
- They are just containers used for developing and/or for avoiding installing additional software on your computer
- Ex.: Starting a new Node project without Node being installed on the host machine

## Create a Node "environment" via utility container

This commands give you access to the "node" command without having it installed

```
docker run -it -d --rm --name node-con node
docker exec -it node-con npm init
```

or better

```
docker run -it --rm --name node-con node npm init
```

so that `npm init` overrides the default `CMD` command of the `node` image
