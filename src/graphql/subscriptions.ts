/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductCart = /* GraphQL */ `
  subscription OnCreateProductCart {
    onCreateProductCart {
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
export const onUpdateProductCart = /* GraphQL */ `
  subscription OnUpdateProductCart {
    onUpdateProductCart {
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
export const onDeleteProductCart = /* GraphQL */ `
  subscription OnDeleteProductCart {
    onDeleteProductCart {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
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
