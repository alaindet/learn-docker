FROM node:16-alpine3.11

# Use non-root user to execute application (safer)
USER node

# Create app folder and allow "node" user to write into it
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Define the base directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json files
COPY --chown=node:node package*.json .

# Install application dependencies
RUN npm install

# Copy all app files
COPY --chown=node:node . .

# Define a build-time-only variable (ARGument)
# Instructions create layers, so it's better to put variables on the bottom
ARG DEFAULT_APP_PORT=80

# Set some environment variables
ENV APP_PORT $DEFAULT_APP_PORT

# Expose port by using an environment variable
EXPOSE $APP_PORT

# They should be declared inside the docker run command in order to override
# named volumes and bind mounts declarations
# VOLUME [ "/home/node/app/storage/temp" ]
# VOLUME [ "/home/node/app/node_modules"]

# Start app
CMD ["npm", "start"]
