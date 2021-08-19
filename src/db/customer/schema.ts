import { Schema } from 'mongoose';
import { ICustomer, ICustomerModel } from './types';
import { createCustomer } from './statics';
const CustomerSchema = new Schema<ICustomer, ICustomerModel>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 18,
  },
});

/*
 * Add Statics
 */
CustomerSchema.statics.createCustomer = createCustomer;

export default CustomerSchema;
