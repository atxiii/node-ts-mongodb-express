import { Schema } from 'mongoose';
import { Model, Document } from 'mongoose';
import { IGenreDocument, IGenre } from '../genres/types';

export interface IMovie {
  title: String;
  genre?: IGenreDocument;
  numberInStock?: Number;
  dailyRentalRate: Number;
}

export interface IMovieDocument extends IMovie, Document {}

export interface IMovieModel extends Model<IMovie> {
  getMoviesByGenre: (
    this: IMovieModel,
    { genre }: { genre: String },
  ) => Promise<IMovieDocument>;
  createMovie: (
    this: IMovieModel,
    {
      title,
      genre,
      numberInStock,
      dailyRentalRate,
    }: {
      title: String;
      genre: IGenreDocument;
      numberInStock: Number;
      dailyRentalRate: Number;
    },
  ) => Promise<IMovieDocument>;
}
