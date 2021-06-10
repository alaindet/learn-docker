# Start from official node image
FROM node

WORKDIR /app

# Just copy the package.json
COPY package.json /app

# Runs inside the WORKDIR as soon as the container is created from the image
RUN npm install

# Copy all files (.) from host file system to /app folder (WORKDIR)
# on the container file system
# This copies everything except package.json so every other layer can be cached
# This way, changing code does not affect "RUN npm install" layer
COPY . .
# Equivalent to COPY . /app

# Expose port 80 of the container
EXPOSE 80

# Runs when the container based on this image is started
# Overrides the CMD command of the base image
# It should always be the last command
CMD ["node", "server.js"]
