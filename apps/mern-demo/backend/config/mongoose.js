const containerName = process.env.APP_MONGODB_CONTAINER_NAME;
const username = process.env.APP_MONGODB_USERNAME;
const password = process.env.APP_MONGODB_PASSWORD;

const dns = `mongodb://${username}:${password}@${containerName}:27017/course-goals?authSource=admin`;
// const dns = `mongodb://172.17.0.2:27017/course-goals`;
// const dns = `mongodb://host.docker.internal:27017/course-goals`;
// const dns = `mongodb://localhost:27017/course-goals`;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  dns,
  connectOptions,
};
