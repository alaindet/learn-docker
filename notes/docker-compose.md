# Docker Composer

- Makes multi-container setups easier
- It is based on a `docker-compose.yml` configuration file describing all containers, volumes, ports, networks etc.
- It works together with `Dockerfile`s for custom images
- It is best suited to organize multi containers on a **single** machine
- A **SERVICE** for Docker Compose is just a container
- By default, services are removed when stopped (like the `docker run --rm` flag)
- By default, Docker Compose creates a network for the containers running inside it
- By default, Docker Compose shuts down everything and removes container, **but** it persists volumes. To remove them, use `docker-compose down -v`
- Docker Compose can create images if needed, via the `build` instruction
- Docker Compose appends a prefix (the folder name) and a suffix to any container name, but it allows your code to reference to the names defined in the `docker-compose.yaml` as well

## `build` and `up`
- Run `docker-compose up --build` to force a re-build of all images
- Run `docker-compose build` to just build images without running containers
- Multiple `docker-compose up` use cached instructions
- When you run `docker-compose up` when containers defined as services are already running, Docker just checks if current state matches `docker-compose.yaml` and at best it spins missing containers, but it **DOES NOT** create multiple containers from the same image
