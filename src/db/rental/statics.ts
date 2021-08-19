import { IRentalDocument, IRentalModel, IRental } from './types';

export async function createRental(
  this: IRentalModel,
  { rental }: { rental: IRental },
): Promise<IRentalDocument> {
  const Rental = new this(rental);
  return await Rental.save();
}

export async function getRental(
  this: IRentalModel,
): Promise<IRentalDocument[]> {
  return await this.find().sort('-dateOut');
}
