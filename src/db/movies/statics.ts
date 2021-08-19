import { IMovieDocument, IMovieModel } from './types';
import { genreModel } from '../genres/model';
import { IGenre, IGenreDocument, IGenreModel } from '../genres/types';

// Get Movie By Genre
export async function getMoviesByGenre(
  this: IMovieModel,
  { genre }: { genre: String },
): Promise<IMovieDocument[]> {
  try {
    return await this.aggregate([
      {
        $match: {
          'genre.name': genre,
        },
      },
    ]);
  } catch (e) {
    console.log(e);
  }
}

//Create a Movie
export async function createMovie(
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
): Promise<IMovieDocument> {
  const getGenre = await genreModel.getGenreByName({
    name: genre.name,
  });

  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };

  const movie = new this({
    title,
    genre: {
      _id: getGenre[0]._id,
      name: getGenre[0].name,
    },
    numberInStock,
    dailyRentalRate,
  });

  return await movie.save();
}
