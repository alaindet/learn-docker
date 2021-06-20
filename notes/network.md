# Network

When building applications, it's pretty common to have multiple containers communicating with each other and/or with the internet. Networking in Docker is all about **container communication**

## Types of communication

- Container to Container
- Container to Internet
- Container to Host (uses `host.docker.internal`)

### `host.docker.internal` DNS name

- Docker maps it to the internal IP address of the host machine, it's like `localhost` for containers running on the same host machine
- It should **NOT** be used in production, only in development
