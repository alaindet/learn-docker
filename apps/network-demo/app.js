const express = require('express');
const axios = require('axios').default;
const mongoose = require('mongoose');
const config = require('./config');
const Favorite = require('./models/favorite');

// Setup
const app = express();
app.use(express.json());

app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({ favorites });
});

app.post('/favorites', async (req, res) => {

  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {

    if (favType !== 'movie' && favType !== 'character') {
      throw new Error('"type" should be "movie" or "character"!');
    }

    const existingFav = await Favorite.findOne({ name: favName });

    if (existingFav) {
      throw new Error('Favorite exists already!');
    }
  }
  
  catch (error) {
    const { message } = error;
    return res.status(500).json({ message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res.status(201).json({
      message: 'Favorite saved!',
      favorite: favorite.toObject(),
    });
  }
  
  catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(config.api.swapi.movies);
    const movies = response.data;
    res.status(200).json({ movies });
  } catch (error) {
    const message = 'Something went wrong.';
    res.status(500).json({ message });
  }
});

app.get('/people', async (req, res) => {
  try {
    const response = await axios.get(config.api.swapi.people);
    const people = response.data;
    res.status(200).json({ people });
  } catch (error) {
    const message = 'Something went wrong.';
    res.status(500).json({ message });
  }
});

mongooseOptions = {
  useNewUrlParser: true,
};

mongoose.connect(config.mongoose.dns, mongooseOptions, err => {

  if (err) {
    console.log(err);
  }

  else {
    app.listen(3000);
  }

});
