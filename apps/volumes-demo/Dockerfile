FROM node:16-alpine3.11

# Use non-root user
USER node

# Create app folder and allow "node" user to write into it
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copy package.json and package-lock.json files
COPY --chown=node:node package*.json .

# Install dependencies
RUN npm install

# Copy all app files
COPY --chown=node:node . .

# Expose port 8080
EXPOSE 8080

VOLUME [ "/home/node/app/storage/temp" ]
VOLUME [ "/home/node/app/node_modules"]

# Start app
CMD ["npm", "start"]
