- Interactive mode lets you use STDIN with a container, while *attached mode* only watches for STDOUT in read-only mode
- It can be activated with the `-i` (`--interactive`) flag of `docker run`
- It is usually run together with the `-t` (`--tty`) flag for terminal input
- Example `docker run -it 00a5c5a6c297db`
- **WATCH OUT** Running `docker run` multiple times creates multiple identical containers!
- To avoid this, use `docker start -i CONTAINER_NAME` instead
