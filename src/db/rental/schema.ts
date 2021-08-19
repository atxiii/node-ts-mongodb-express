import { Schema } from 'mongoose';
import CustomerSchema from '../customer/schema';
import { IRental, IRentalModel } from './types';
import { createRental, getRental } from './statics';
import MovieSchema from '../movies/schema';

const RentalSchema = new Schema<IRental, IRentalModel>({
  customer: CustomerSchema,
  movie: MovieSchema,
  dateOut: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateReturned: {
    type: Date,
  },
  rentalFee: {
    type: Number,
    min: 0,
  },
});

/*
 * Add Statics
 */

RentalSchema.statics.createRental = createRental;
RentalSchema.statics.getRental = getRental;

export default RentalSchema;
