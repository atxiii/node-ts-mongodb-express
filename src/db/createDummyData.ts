import { connectDB, disconnectDB } from './connection';
import { genreModel } from './genres/model';

import movieModel from './movies/model';

(async () => {
  connectDB();
  const genres = [
    { name: 'Comedy' },
    { name: 'Action' },
    { name: 'Romance' },
    { name: 'Thriller' },
  ];

  const myMovies = [
    {
      title: 'Tommy and Jessica',
      genre: new genreModel({ name: 'Action' }),
      numberInStock: 0,
      dailyRentalRate: 10,
    },
  ];

  try {
    // for (const genre of genres) {
    //   await genreModel.create(genre);
    //   console.log(`Create Genre ${genre.name}`);
    // }
    console.log(await movieModel.create(myMovies));
    disconnectDB();
  } catch (error) {
    console.log(error);
  }
})();
