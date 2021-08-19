import { Schema } from 'mongoose';
import { IGenre, IGenreDocument, IGenreModel } from './types';

import {
  findGenreById,
  findGenres,
  createGenre,
  getGenreByName,
} from './statics';

const GenreSchema = new Schema<IGenre, IGenreModel>({
  name: {
    type: 'String',
    minlength: 3,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: v => {
        return v && v.length > 2;
      },
      message: 'Name length must be greater than 2',
    },
  },
});

/*
 * add static functions to model
 */
GenreSchema.statics.findGenreById = findGenreById;
GenreSchema.statics.findGenres = findGenres;
GenreSchema.statics.createGenre = createGenre;
GenreSchema.statics.getGenreByName = getGenreByName;

export default GenreSchema;
