const containerName = process.env.MONGODB_CONTAINER_NAME;

const dns = `mongodb://${containerName}:27017/swfavorites`;

module.exports = {
  dns,
};
