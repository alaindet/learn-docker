# Start from official node image
FROM node

WORKDIR /app

# Copy all files (.) from host file system to /app folder (WORKDIR)
# on the container file system
COPY . .
# Equivalent to COPY . /app

# Runs inside the WORKDIR as soon as the container is created from the image
RUN npm install

# Expose port 80 of the container
EXPOSE 80

# Runs when the container based on this image is started
# Overrides the CMD command of the base image
# It should always be the last command
CMD ["node", "server.js"]
