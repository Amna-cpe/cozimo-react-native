/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayment = /* GraphQL */ `
  mutation CreatePayment($amount: Int!) {
    createPayment(amount: $amount) {
      clientSecret
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      defaultAddress
      userSub
      phoneNum
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      defaultAddress
      userSub
      phoneNum
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      defaultAddress
      userSub
      phoneNum
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      avgRating
      ratings
      price
      oldPrice
      language
      numPages
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      avgRating
      ratings
      price
      oldPrice
      language
      numPages
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      avgRating
      ratings
      price
      oldPrice
      language
      numPages
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProductCart = /* GraphQL */ `
  mutation CreateProductCart(
    $input: CreateProductCartInput!
    $condition: ModelProductCartConditionInput
  ) {
    createProductCart(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProductCart = /* GraphQL */ `
  mutation UpdateProductCart(
    $input: UpdateProductCartInput!
    $condition: ModelProductCartConditionInput
  ) {
    updateProductCart(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProductCart = /* GraphQL */ `
  mutation DeleteProductCart(
    $input: DeleteProductCartInput!
    $condition: ModelProductCartConditionInput
  ) {
    deleteProductCart(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      Country
      fullName
      phoneNum
      StreetAdd
      BuildAdd
      City
      ZipCode
      State
      createdAt
      status
      SubTotal
      shippingFees
      GrandTotal
      shippingMethod
      PaymentMethod
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      Country
      fullName
      phoneNum
      StreetAdd
      BuildAdd
      City
      ZipCode
      State
      createdAt
      status
      SubTotal
      shippingFees
      GrandTotal
      shippingMethod
      PaymentMethod
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      Country
      fullName
      phoneNum
      StreetAdd
      BuildAdd
      City
      ZipCode
      State
      createdAt
      status
      SubTotal
      shippingFees
      GrandTotal
      shippingMethod
      PaymentMethod
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderId
      order {
        id
        userSub
        Country
        fullName
        phoneNum
        StreetAdd
        BuildAdd
        City
        ZipCode
        State
        createdAt
        status
        SubTotal
        shippingFees
        GrandTotal
        shippingMethod
        PaymentMethod
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderId
      order {
        id
        userSub
        Country
        fullName
        phoneNum
        StreetAdd
        BuildAdd
        City
        ZipCode
        State
        createdAt
        status
        SubTotal
        shippingFees
        GrandTotal
        shippingMethod
        PaymentMethod
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productId
      product {
        id
        title
        description
        image
        avgRating
        ratings
        price
        oldPrice
        language
        numPages
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderId
      order {
        id
        userSub
        Country
        fullName
        phoneNum
        StreetAdd
        BuildAdd
        City
        ZipCode
        State
        createdAt
        status
        SubTotal
        shippingFees
        GrandTotal
        shippingMethod
        PaymentMethod
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
