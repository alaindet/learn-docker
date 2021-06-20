# Network

When building applications, it's pretty common to have multiple containers communicating with each other and/or with the internet. Networking in Docker is all about **container communication**

## Types of communication

- Container to Container
- Container to Internet
- Container to Host (uses `host.docker.internal`)

### `host.docker.internal` DNS name

- Docker maps it to the internal IP address of the host machine, it's like `localhost` for containers running on the same host machine
- It should **NOT** be used in production, only in development
- It is needed to make a container communicate with the host machine (ex.: a dockerized app talking to a MongoDB server installed on the host machine)

## Container networks

- They are also called just *networks*
- They are completely managed via the `docker network` command which has these subcommands
  - `connect`
  - `create`
  - `disconnect`
  - `inspect`
  - `ls`
  - `prune`
  - `rm`
- It is possible to create a *network* that gathers more than one container inside the same network, by using something like this `docker run --network my_network`
- All containers in the same network can have intra-network communication easily
