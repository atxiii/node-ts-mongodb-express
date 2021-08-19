import { Document, Model } from 'mongoose';
import { ICustomer, ICustomerDocument } from '../customer/types';
import { IMovie } from '../movies/types';

export interface IRental {
  movie: IMovie;
  customer: ICustomer;
  dateOut?: Date;
  dateReturned?: Date;
  rentalFee?: Number;
}

export interface IRentalDocument extends IRental, Document {}

export interface IRentalModel extends Model<IRental> {
  createRental: (
    this: IRentalModel,
    { rental }: { rental: IRental },
  ) => Promise<IRentalDocument>;

  getRental: (this: IRentalModel) => Promise<IRentalDocument[]>;
}
