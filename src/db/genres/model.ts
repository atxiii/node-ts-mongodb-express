import { model } from 'mongoose';
import GenreSchema from './schema';
import { IGenre, IGenreModel } from './types';

export const genreModel = model<IGenre, IGenreModel>('genre', GenreSchema);
