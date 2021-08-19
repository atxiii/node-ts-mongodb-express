import { Model, Document, Schema, ObjectId, Types } from 'mongoose';
export interface IGenre {
  name: String;
}
export interface IGenreDocument extends Document, IGenre {}

export interface IGenreModel extends Model<IGenre> {
  findGenreById: (
    this: IGenreModel,
    { genreId }: { genreId: Types._ObjectId },
  ) => Promise<IGenreDocument>;

  findGenres: (this: IGenreModel) => Promise<IGenreDocument[]>;

  createGenre: (
    this: IGenreModel,
    { name }: { name: string },
  ) => Promise<IGenreDocument>;

  getGenreByName: (
    this: IGenreModel,
    { name }: { name: String },
  ) => Promise<IGenreDocument[]>;
}
