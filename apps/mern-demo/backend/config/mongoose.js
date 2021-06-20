const containerName = process.env.APP_MONGODB_CONTAINER_NAME;

const dns = `mongodb://${containerName}:27017/course-goals`;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  dns,
  connectOptions,
};
