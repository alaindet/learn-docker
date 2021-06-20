module.exports = {
  api: {
    swapi: {
      movies: 'https://swapi.dev/api/films',
      people: 'https://swapi.dev/api/people',
    }
  },
  mongoose: {
    // dns: 'mongodb://localhost:27017/swfavorites',
    dns: 'mongodb://host.docker.internal:27017/swfavorites',
  },
};
