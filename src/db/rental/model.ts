import RentalSchema from './schema';
import { IRental, IRentalModel } from './types';
import { model } from 'mongoose';

const rentalModel = model<IRental, IRentalModel>('rental', RentalSchema);

export default rentalModel;
