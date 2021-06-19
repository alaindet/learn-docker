cd /apps/volumes-demo

docker build -t vols-im .

docker run -d -p 3000:8080 --rm --name vols-co  -v /app/node_modules -v $(pwd):/app -v vols-vo:/app/public/files vols-im

docker logs vols-co

docker stop vols-co
