import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PaymentIntent {
  readonly clientSecret: string;
  constructor(init: ModelInit<PaymentIntent>);
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly defaultAddress?: string;
  readonly userSub: string;
  readonly phoneNum: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly avgRating?: number;
  readonly ratings?: number;
  readonly price: number;
  readonly oldPrice?: number;
  readonly language?: string;
  readonly numPages?: number;
  readonly author?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare class ProductCart {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly productId: string;
  readonly product?: Product;
  constructor(init: ModelInit<ProductCart>);
  static copyOf(source: ProductCart, mutator: (draft: MutableModel<ProductCart>) => MutableModel<ProductCart> | void): ProductCart;
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly Country: string;
  readonly fullName: string;
  readonly phoneNum: string;
  readonly StreetAdd: string;
  readonly BuildAdd: string;
  readonly City: string;
  readonly ZipCode: string;
  readonly State: string;
  readonly createdAt?: string;
  readonly status?: string;
  readonly SubTotal: number;
  readonly shippingFees?: number;
  readonly GrandTotal?: number;
  readonly shippingMethod?: string;
  readonly PaymentMethod?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class OrderProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly productId: string;
  readonly product?: Product;
  readonly orderId: string;
  readonly order?: Order;
  constructor(init: ModelInit<OrderProduct>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct>) => MutableModel<OrderProduct> | void): OrderProduct;
}