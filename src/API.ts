/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PaymentIntent = {
  __typename: "PaymentIntent",
  clientSecret?: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  defaultAddress?: string | null,
  userSub: string,
  phoneNum: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  defaultAddress?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  email?: string,
  defaultAddress?: string | null,
  userSub?: string,
  phoneNum?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  name?: string | null,
  email?: string | null,
  defaultAddress?: string | null,
  userSub?: string | null,
  phoneNum?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  title: string,
  description: string,
  image: string,
  avgRating?: number | null,
  ratings?: number | null,
  price: number,
  oldPrice?: number | null,
  language?: string | null,
  numPages?: number | null,
  author?: string | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  language?: ModelStringInput | null,
  numPages?: ModelIntInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id?: string,
  title?: string,
  description?: string,
  image?: string,
  avgRating?: number | null,
  ratings?: number | null,
  price?: number,
  oldPrice?: number | null,
  language?: string | null,
  numPages?: number | null,
  author?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  avgRating?: number | null,
  ratings?: number | null,
  price?: number | null,
  oldPrice?: number | null,
  language?: string | null,
  numPages?: number | null,
  author?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProductCartInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  productId: string,
  _version?: number | null,
};

export type ModelProductCartConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCartConditionInput | null > | null,
  or?: Array< ModelProductCartConditionInput | null > | null,
  not?: ModelProductCartConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ProductCart = {
  __typename: "ProductCart",
  id?: string,
  userSub?: string,
  quantity?: number,
  productId?: string,
  product?: Product,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateProductCartInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  productId?: string | null,
  _version?: number | null,
};

export type DeleteProductCartInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userSub: string,
  Country: string,
  fullName: string,
  phoneNum: string,
  StreetAdd: string,
  BuildAdd: string,
  City: string,
  ZipCode: string,
  State: string,
  createdAt?: string | null,
  status?: string | null,
  SubTotal: number,
  shippingFees?: number | null,
  GrandTotal?: number | null,
  shippingMethod?: string | null,
  PaymentMethod?: string | null,
  _version?: number | null,
};

export type ModelOrderConditionInput = {
  userSub?: ModelStringInput | null,
  Country?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  StreetAdd?: ModelStringInput | null,
  BuildAdd?: ModelStringInput | null,
  City?: ModelStringInput | null,
  ZipCode?: ModelStringInput | null,
  State?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  SubTotal?: ModelFloatInput | null,
  shippingFees?: ModelFloatInput | null,
  GrandTotal?: ModelFloatInput | null,
  shippingMethod?: ModelStringInput | null,
  PaymentMethod?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id?: string,
  userSub?: string,
  Country?: string,
  fullName?: string,
  phoneNum?: string,
  StreetAdd?: string,
  BuildAdd?: string,
  City?: string,
  ZipCode?: string,
  State?: string,
  createdAt?: string | null,
  status?: string | null,
  SubTotal?: number,
  shippingFees?: number | null,
  GrandTotal?: number | null,
  shippingMethod?: string | null,
  PaymentMethod?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  updatedAt?: string,
};

export type UpdateOrderInput = {
  id: string,
  userSub?: string | null,
  Country?: string | null,
  fullName?: string | null,
  phoneNum?: string | null,
  StreetAdd?: string | null,
  BuildAdd?: string | null,
  City?: string | null,
  ZipCode?: string | null,
  State?: string | null,
  createdAt?: string | null,
  status?: string | null,
  SubTotal?: number | null,
  shippingFees?: number | null,
  GrandTotal?: number | null,
  shippingMethod?: string | null,
  PaymentMethod?: string | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateOrderProductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  productId: string,
  orderId: string,
  _version?: number | null,
};

export type ModelOrderProductConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelOrderProductConditionInput | null > | null,
  or?: Array< ModelOrderProductConditionInput | null > | null,
  not?: ModelOrderProductConditionInput | null,
};

export type OrderProduct = {
  __typename: "OrderProduct",
  id?: string,
  userSub?: string,
  quantity?: number,
  productId?: string,
  product?: Product,
  orderId?: string,
  order?: Order,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateOrderProductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  productId?: string | null,
  orderId?: string | null,
  _version?: number | null,
};

export type DeleteOrderProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  defaultAddress?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  language?: ModelStringInput | null,
  numPages?: ModelIntInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductCartFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCartFilterInput | null > | null,
  or?: Array< ModelProductCartFilterInput | null > | null,
  not?: ModelProductCartFilterInput | null,
};

export type ModelProductCartConnection = {
  __typename: "ModelProductCartConnection",
  items?:  Array<ProductCart | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  Country?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  StreetAdd?: ModelStringInput | null,
  BuildAdd?: ModelStringInput | null,
  City?: ModelStringInput | null,
  ZipCode?: ModelStringInput | null,
  State?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  SubTotal?: ModelFloatInput | null,
  shippingFees?: ModelFloatInput | null,
  GrandTotal?: ModelFloatInput | null,
  shippingMethod?: ModelStringInput | null,
  PaymentMethod?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderProductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelOrderProductFilterInput | null > | null,
  or?: Array< ModelOrderProductFilterInput | null > | null,
  not?: ModelOrderProductFilterInput | null,
};

export type ModelOrderProductConnection = {
  __typename: "ModelOrderProductConnection",
  items?:  Array<OrderProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePaymentMutationVariables = {
  amount?: number,
};

export type CreatePaymentMutation = {
  createPayment:  {
    __typename: "PaymentIntent",
    clientSecret: string,
  },
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input?: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input?: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input?: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductCartMutationVariables = {
  input?: CreateProductCartInput,
  condition?: ModelProductCartConditionInput | null,
};

export type CreateProductCartMutation = {
  createProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductCartMutationVariables = {
  input?: UpdateProductCartInput,
  condition?: ModelProductCartConditionInput | null,
};

export type UpdateProductCartMutation = {
  updateProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductCartMutationVariables = {
  input?: DeleteProductCartInput,
  condition?: ModelProductCartConditionInput | null,
};

export type DeleteProductCartMutation = {
  deleteProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input?: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input?: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input?: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreateOrderProductMutationVariables = {
  input?: CreateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type CreateOrderProductMutation = {
  createOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderProductMutationVariables = {
  input?: UpdateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type UpdateOrderProductMutation = {
  updateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderProductMutationVariables = {
  input?: DeleteOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type DeleteOrderProductMutation = {
  deleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      defaultAddress?: string | null,
      userSub: string,
      phoneNum: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      defaultAddress?: string | null,
      userSub: string,
      phoneNum: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id?: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductCartsQueryVariables = {
  filter?: ModelProductCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductCartsQuery = {
  syncProductCarts?:  {
    __typename: "ModelProductCartConnection",
    items?:  Array< {
      __typename: "ProductCart",
      id: string,
      userSub: string,
      quantity: number,
      productId: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description: string,
        image: string,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        language?: string | null,
        numPages?: number | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductCartQueryVariables = {
  id?: string,
};

export type GetProductCartQuery = {
  getProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductCartsQueryVariables = {
  filter?: ModelProductCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCartsQuery = {
  listProductCarts?:  {
    __typename: "ModelProductCartConnection",
    items?:  Array< {
      __typename: "ProductCart",
      id: string,
      userSub: string,
      quantity: number,
      productId: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description: string,
        image: string,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        language?: string | null,
        numPages?: number | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id?: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderProductsQuery = {
  syncOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      userSub: string,
      quantity: number,
      productId: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description: string,
        image: string,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        language?: string | null,
        numPages?: number | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      orderId: string,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        Country: string,
        fullName: string,
        phoneNum: string,
        StreetAdd: string,
        BuildAdd: string,
        City: string,
        ZipCode: string,
        State: string,
        createdAt?: string | null,
        status?: string | null,
        SubTotal: number,
        shippingFees?: number | null,
        GrandTotal?: number | null,
        shippingMethod?: string | null,
        PaymentMethod?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderProductQueryVariables = {
  id?: string,
};

export type GetOrderProductQuery = {
  getOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderProductsQuery = {
  listOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      userSub: string,
      quantity: number,
      productId: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description: string,
        image: string,
        avgRating?: number | null,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        language?: string | null,
        numPages?: number | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      orderId: string,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        Country: string,
        fullName: string,
        phoneNum: string,
        StreetAdd: string,
        BuildAdd: string,
        City: string,
        ZipCode: string,
        State: string,
        createdAt?: string | null,
        status?: string | null,
        SubTotal: number,
        shippingFees?: number | null,
        GrandTotal?: number | null,
        shippingMethod?: string | null,
        PaymentMethod?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    defaultAddress?: string | null,
    userSub: string,
    phoneNum: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description: string,
    image: string,
    avgRating?: number | null,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    language?: string | null,
    numPages?: number | null,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductCartSubscription = {
  onCreateProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductCartSubscription = {
  onUpdateProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductCartSubscription = {
  onDeleteProductCart?:  {
    __typename: "ProductCart",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    Country: string,
    fullName: string,
    phoneNum: string,
    StreetAdd: string,
    BuildAdd: string,
    City: string,
    ZipCode: string,
    State: string,
    createdAt?: string | null,
    status?: string | null,
    SubTotal: number,
    shippingFees?: number | null,
    GrandTotal?: number | null,
    shippingMethod?: string | null,
    PaymentMethod?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderProductSubscription = {
  onCreateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderProductSubscription = {
  onUpdateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderProductSubscription = {
  onDeleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    userSub: string,
    quantity: number,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description: string,
      image: string,
      avgRating?: number | null,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      language?: string | null,
      numPages?: number | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderId: string,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      Country: string,
      fullName: string,
      phoneNum: string,
      StreetAdd: string,
      BuildAdd: string,
      City: string,
      ZipCode: string,
      State: string,
      createdAt?: string | null,
      status?: string | null,
      SubTotal: number,
      shippingFees?: number | null,
      GrandTotal?: number | null,
      shippingMethod?: string | null,
      PaymentMethod?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
