const PRODUCT_1 = { "id": 1, "name": "Martelo de Thor", "quantity": 10 };
const PRODUCT_2 = { "id": 2, "name": "Traje de encolhimento", "quantity": 20 };
const PRODUCT_3 = { "id": 3, "name": "Escudo do Capitão América", "quantity": 30 };

const GET_ALL_PRODUCTS = [PRODUCT_1, PRODUCT_2, PRODUCT_3];

const GET_BY_ID = [PRODUCT_1];

const PRODUCT_TO_CREATE = { "name": "produto", "quantity": 10 };

const CREATED_PRODUCT = { "id": 4, "name": "produto", "quantity": 10 };

const SUCCESSFULLY_CREATED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const GET_BY_NAME = [PRODUCT_1];

const SUCCESSFULLY_UPDATED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: "Rows matched: 1  Changed: 1  Warnings: 0",
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1,
};

const SUCCESSFULLY_REMOVED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const QUANTITY_TO_UPDATE = { "id": 1, "quantity": 30 }

const PRODUCT_TO_UPDATE = { "name": "Martelo de Thor", "quantity": 100 };

const UPDATED_PRODUCT = { "id": 1, "name": "Martelo de Thor", "quantity": 100 };

module.exports = {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  PRODUCT_TO_CREATE,
  CREATED_PRODUCT,
  SUCCESSFULLY_CREATED,
  GET_BY_NAME,
  SUCCESSFULLY_UPDATED,
  PRODUCT_1,
  SUCCESSFULLY_REMOVED,
  QUANTITY_TO_UPDATE,
  PRODUCT_TO_UPDATE,
  UPDATED_PRODUCT,
}
