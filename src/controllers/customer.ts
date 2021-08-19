import customerModel from '../db/customer/model';
import express from 'express';
import { isValidObjectId, Types } from 'mongoose';
const customerApi = express.Router();

//@desc Get All Customers
//@route /api/customers
//@access Public
customerApi.get('/', async (req, res) => {
  try {
    const result = await customerModel.find();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

//@desc Get By Id
//@route /api/customers/:id
//@access Public
customerApi.get('/:id', async (req, res) => {
  try {
    if (!isValidID(req.params.id)) return;
    const result = await customerModel.findById(req.params.id);
    if (result) res.send(result);
    res.send('Customer Not Exist!');
  } catch (e) {
    res.status(404).send('Customer Not Exist!');
    res.send(e);
  }
});

//@desc Create new customer
//@route /api/customers/
//@access Public
customerApi.post('/', async (req, res) => {
  try {
    const customer = {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    };
    const result = await customerModel.createCustomer({ customer });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

/*
 * Validation genre ID
 */
function isValidID(id) {
  const genreId = new Types.ObjectId(id);
  if (id && isValidObjectId(id)) return genreId;
}

export default customerApi;
