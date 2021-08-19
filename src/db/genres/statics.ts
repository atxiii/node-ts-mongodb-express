import { IGenreDocument, IGenreModel } from './types';
import { Types } from 'mongoose';

export async function findGenreById(
  this: IGenreModel,
  { genreId }: { genreId: Types._ObjectId },
): Promise<IGenreDocument> {
  try {
    return await this.findById(genreId);
  } catch (e) {
    return await e;
  }
}

export async function getGenreByName(
  this: IGenreModel,
  { name }: { name: String },
): Promise<IGenreDocument[]> {
  try {
    return await this.aggregate([
      {
        $match: {
          name: name,
        },
      },
    ]);
  } catch (e) {
    console.log(e);
  }
}

export async function findGenres(
  this: IGenreModel,
): Promise<IGenreDocument[]> {
  return await this.find();
}

export async function createGenre(
  this: IGenreModel,
  { name }: { name: string },
): Promise<IGenreDocument> {
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  return await this.findOneAndUpdate({ name }, { name }, options);
}
