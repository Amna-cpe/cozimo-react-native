/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProductCarts = /* GraphQL */ `
  query SyncProductCarts(
    $filter: ModelProductCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProductCart = /* GraphQL */ `
  query GetProductCart($id: ID!) {
    getProductCart(id: $id) {
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
export const listProductCarts = /* GraphQL */ `
  query ListProductCarts(
    $filter: ModelProductCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
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
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
