# Hello World app

## Connect via SSH

1. Download `hello-world.pem` securely
2. Connect via ssh with
   ```
   ssh -i "hello-world.pem" ec2-user@ec2-3-68-86-248.eu-central-1.compute.amazonaws.com
   ```

### Install Docker on Amazon Linux
```
sudo amazon-linux-extras install docker
sudo service docker start
```
