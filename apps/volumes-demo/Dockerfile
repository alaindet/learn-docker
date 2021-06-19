FROM node:16-alpine3.11

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

# Equivalent to "docker run ... -v /app/node_modules"
# Creates an anonymous volume that preserves node_modules
# inside the container
# VOLUME [ "/app/node_modules" ]

CMD ["npm", "start"]
