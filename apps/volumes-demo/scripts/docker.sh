docker build -t vols-im .

docker run -d -p 3000:80 --rm --name vols-co -v /home/node/app/node_modules -v $(pwd):/home/node/app:ro -v vols-vo:/home/node/app/public/files vols-im
