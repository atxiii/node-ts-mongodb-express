import express, { json } from 'express';
import customerApi from './controllers/customer';
import genresApi from './controllers/genres';
import moviesApi from './controllers/movies';
import rentalApi from './controllers/rentals';
const app = express();

/*
 * Express configuration
 */
app.set('port', process.env.PORT || 5000);
app.use(json());

// Genres API
app.use('/api/genres', genresApi);
app.use('/api/movies', moviesApi);
app.use('/api/rentals', rentalApi);
app.use('/api/customers', customerApi);

export default app;
