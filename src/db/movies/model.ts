import MovieSchema from './schema';
import { model } from 'mongoose';
import { IMovie, IMovieModel } from './types';

const movieModel = model<IMovie, IMovieModel>('movie', MovieSchema);

export default movieModel;
