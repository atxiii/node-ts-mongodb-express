import movieModel from '../db/movies/model';
import express, { Request, Response } from 'express';
const moviesApi = express.Router();

// @desc Get All Movies
// @route /api/movies
// @access public
moviesApi.get('/', async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.send(movies);
  } catch (e) {
    console.log(e);
  }
});

// @desc Get All Movies
// @route /api/movies/:genre
// @access public
moviesApi.get('/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const genres = await movieModel.getMoviesByGenre({ genre });
    res.send(genres);
  } catch (e) {
    console.log(e);
  }
});
// @desc Get By Id
// @route /api/movies/:id
// @access public
moviesApi.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const genre = await movieModel.findById(id);
    res.send(genre);
  } catch (e) {
    res.status(404).send('Not Found!');
    console.log(e);
  }
});

// @desc Post a Genre
// @route /api/movies/
// @access public
moviesApi.post('/', async (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    numberInStock: parseInt(req.body.numberInStock),
    dailyRentalRate: parseInt(req.body.dailyRentalRate),
  };

  const result = await movieModel.createMovie(movie);

  res.send(result);
});

export default moviesApi;
