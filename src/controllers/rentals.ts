import rentalModel from '../db/rental/model';
import express from 'express';

const rentalApi = express.Router();

//@desc Get All Rentals
//@route /api/rentals
//@access public
rentalApi.get('/', async (req, res) => {
  try {
    const result = await rentalModel.getRental();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

//@desc create a new rental
//@route /api/rentals
//@access private
rentalApi.post('/', async (req, res) => {
  try {
    const rental = {
      movie: req.body.movie,
      customer: req.body.customer,
      dateReturned: req.body.dateReturned,
      rentalFee: req.body.rentalFee,
    };

    const result = await rentalModel.createRental({ rental });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

export default rentalApi;
