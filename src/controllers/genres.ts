import express, { Request, Response } from 'express';
import { genreModel } from '../db/genres/model';
import { isValidObjectId, Types } from 'mongoose';

const genresApi = express.Router();

//@desc Get All genres
//@route Get /api/genres
//@access Public
genresApi.get('/', async (req, res) => {
  if (req.query.name) {
    try {
      const name: String = req.query.name.toString();
      let result = await genreModel.getGenreByName({ name });
      if (result) return res.send(result[0]._id);
    } catch (e) {
      console.log(e);
      return res.status(404).send('Not Found!');
    }
  }

  res.send(await genreModel.findGenres());
});

//@desc Get by id
//@route Get /api/genres/:id
//@access Public

genresApi.get('/:id', async (req, res) => {
  try {
    const genreId = isValidID(req.params.id);

    if (genreId) {
      let result = await genreModel.findGenreById({ genreId });
      if (result) return res.send(result.name);
    }
  } catch (e) {
    console.log(e);
    return res.status(404).send('Not Found!');
  }
});

//@desc create or update
//@route POST /api/genres
//@access Public
genresApi.post('/', async (req, res) => {
  try {
    const result = await genreModel.createGenre({
      name: req.body.name,
    });
    res.send(result);
  } catch (e) {
    res.send(e.errors.name.message);
  }
});

//@desc Delete
//@route Delete /api/genres/:id
//@access Public
genresApi.delete('/:id', async (req, res) => {
  const genreId = isValidID(req.params.id);

  if (genreId) {
    let result = await genreModel.deleteOne({ _id: genreId });
    return res.send(result);
  }

  return res.status(404).send('Not Found!');
});

/*
 * Validation genre ID
 */
function isValidID(id) {
  const genreId = new Types.ObjectId(id);
  if (id && isValidObjectId(id)) return genreId;
}

export default genresApi;
