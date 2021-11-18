// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Product, ProductCart, Order, OrderProduct, PaymentIntent } = initSchema(schema);

export {
  User,
  Product,
  ProductCart,
  Order,
  OrderProduct,
  PaymentIntent
};