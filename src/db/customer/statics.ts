import { ICustomer, ICustomerModel, ICustomerDocument } from './types';
export async function createCustomer(
  this: ICustomerModel,
  { customer }: { customer: ICustomer },
): Promise<ICustomerDocument> {
  const Customer = new this(customer);
  return await Customer.save();
}
