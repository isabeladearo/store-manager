const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../db/connection");
const { ProductsModel } = require("../../../models");
const { products } = require("../mocks");

describe('🟣 Models | Products', () => {

  describe('getAll', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([products.GET_ALL_PRODUCTS]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [products] = await ProductsModel.getAll();
    
      expect(products).to.be.an("array");
    });

    it('cada objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
      const [products] = await ProductsModel.getAll();
    
      products.forEach((product) =>
        expect(product).to.include.all.keys("id", "name", "quantity")
      );
    });
  });

  describe('getById', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([products.GET_BY_ID]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [products] = await ProductsModel.getById(1);
    
      expect(products).to.be.an("array");
    });

    it('o objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
      const [product] = await ProductsModel.getById(1);

      expect(product[0]).to.include.all.keys("id", "name", "quantity")
    });
  });

  describe('getByName', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([products.GET_BY_NAME]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [product] = await ProductsModel.getByName("Martelo de Thor");
    
      expect(product[0]).to.be.an("object");
    });

    it('o objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
      const [product] = await ProductsModel.getByName("Martelo de Thor");

      expect(product[0]).to.have.all.keys("id", "name", "quantity");
    });
  });

  describe('create', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[products.SUCCESSFULLY_CREATED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [response] = await ProductsModel.create(products.PRODUCT_TO_CREATE);
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "insertId" com o valor de "4"', async () => {
      const [response] = await ProductsModel.create(products.PRODUCT_TO_CREATE);

      expect(response[0]).to.have.a.property("insertId");
      expect(response[0].insertId).to.be.a("number");
      expect(response[0].insertId).to.equal(4);
    });
  });

  describe('update', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[products.SUCCESSFULLY_UPDATED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [response] = await ProductsModel.update(products.PRODUCT_1);
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
      const [response] = await ProductsModel.update(products.PRODUCT_1);

      expect(response[0]).to.have.a.property("affectedRows");
      expect(response[0].affectedRows).to.be.a("number");
      expect(response[0].affectedRows).to.equal(1);
    });
  });

  describe('remove', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[products.SUCCESSFULLY_REMOVED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [response] = await ProductsModel.remove(1);
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
      const [response] = await ProductsModel.remove(1);

      expect(response[0]).to.have.a.property("affectedRows");
      expect(response[0].affectedRows).to.be.a("number");
      expect(response[0].affectedRows).to.equal(1);
    });
  });

  describe('updateQuantity', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[products.SUCCESSFULLY_UPDATED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    const { id, quantity } = products.QUANTITY_TO_UPDATE;
    
    it('deve retornar um objeto', async () => {
      const [response] = await ProductsModel.updateQuantity(id, quantity);
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
      const [response] = await ProductsModel.updateQuantity(id, quantity);

      expect(response[0]).to.have.a.property("affectedRows");
      expect(response[0].affectedRows).to.be.a("number");
      expect(response[0].affectedRows).to.equal(1);
    });
  });
});