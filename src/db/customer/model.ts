import { model } from 'mongoose';
import CustomerSchema from './schema';
import { ICustomerModel, ICustomer } from './types';
const customerModel = model<ICustomer, ICustomerModel>(
  'customer',
  CustomerSchema,
);
export default customerModel;
