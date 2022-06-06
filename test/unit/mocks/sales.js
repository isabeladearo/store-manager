const GET_ALL_SALES = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: "2022-06-05T22:40:50.000Z",
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: "2022-06-05T22:40:50.000Z",
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: "2022-06-05T22:40:50.000Z",
  },
];

const GET_BY_ID = [
  {
    productId: 1,
    quantity: 5,
    date: "2022-06-05T22:40:50.000Z",
  },
  {
    productId: 2,
    quantity: 10,
    date: "2022-06-05T22:40:50.000Z",
  },
];

const GET_BY_SALE_ID_AND_PRODUCT_ID = [
  { productId: 1, quantity: 5, date: "2022-06-05T22:40:50.000Z" },
];

const SUCCESSFULLY_CREATED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 3,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const SUCCESSFULLY_REMOVED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const SALE_TO_CREATE = [
  {
      "productId": 1,
      "quantity": 2
  },
  {
      "productId": 2,
      "quantity": 5
  }
];

const CREATED_SALE = {
  "id": 3,
  "itemsSold": [
      {
          "productId": 1,
          "quantity": 2
      },
      {
          "productId": 2,
          "quantity": 5
      }
  ]
};

const SALE_TO_UPDATE = [
  {
      "productId": 1,
      "quantity": 1
  }
];

const UPDATED_SALE = {
  "saleId": "1",
  "itemUpdated": [
      {
          "productId": 1,
          "quantity": 1
      }
  ]
}

module.exports = {
  GET_ALL_SALES,
  GET_BY_ID,
  GET_BY_SALE_ID_AND_PRODUCT_ID,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_REMOVED,
  SALE_TO_CREATE,
  CREATED_SALE,
  SALE_TO_UPDATE,
  UPDATED_SALE,
};
