import { Model, Document } from 'mongoose';

export interface ICustomer {
  name: String;
  isGold?: Boolean;
  phone?: Number;
}
export interface ICustomerDocument extends ICustomer, Document {}
export interface ICustomerModel extends Model<ICustomer> {
  createCustomer: (
    this: ICustomerModel,
    { customer }: { customer: ICustomer },
  ) => Promise<ICustomerDocument>;
}
