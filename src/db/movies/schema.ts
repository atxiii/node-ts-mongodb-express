import { Schema } from 'mongoose';
import GenreSchema from '../genres/schema';
import { getMoviesByGenre, createMovie } from './statics';
import { IMovie, IMovieModel } from './types';

const MovieSchema = new Schema<IMovie, IMovieModel>({
  title: {
    type: String,
    required: true,
    minlength: 2,
    validate: {
      validator: v => {
        return v && v.length > 2;
      },
      message: 'The name Must be greater than 2',
    },
    lowercase: true,
  },
  genre: GenreSchema,
  numberInStock: Number,
  dailyRentalRate: Number,
});

/*
 * Add Statics
 */

MovieSchema.statics.getMoviesByGenre = getMoviesByGenre;
MovieSchema.statics.createMovie = createMovie;

export default MovieSchema;
