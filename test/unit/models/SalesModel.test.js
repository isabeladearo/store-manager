const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../db/connection");
const { SalesModel } = require("../../../models");
const { sales } = require("../mocks");

describe('🟣 Models | Sales', () => {

  describe('getAll', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([sales.GET_ALL_SALES]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [sales] = await SalesModel.getAll();
    
      expect(sales).to.be.an("array");
    });

    it('cada objeto deve possuir as propriedades: "saleId", "productId", "quantity" e "date"', async () => {
      const [sales] = await SalesModel.getAll();
    
      sales.forEach((sale) =>
        expect(sale).to.include.all.keys("saleId", "productId", "quantity", "date")
      );
    });
  });

  describe('getById', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([sales.GET_BY_ID]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [sales] = await SalesModel.getById(1);
    
      expect(sales).to.be.an("array");
    });

    it('cada objeto deve possuir as propriedades: "productId", "quantity" e "date"', async () => {
      const [sales] = await SalesModel.getById(1);

      sales.forEach((sale) =>
        expect(sale).to.include.all.keys("productId", "quantity", "date")
      );
    });
  });

  describe('getByIdAndProduct', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([sales.GET_BY_SALE_ID_AND_PRODUCT_ID]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [sale] = await SalesModel.getByIdAndProduct(1, 1);
    
      expect(sale[0]).to.be.an("object");
    });

    it('o objeto deve possuir as propriedades: "productId", "quantity" e "date"', async () => {
      const [sale] = await SalesModel.getByIdAndProduct(1, 1);

      expect(sale[0]).to.have.all.keys("productId", "quantity", "date");
    });
  });

  describe('create', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[sales.SUCCESSFULLY_CREATED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [response] = await SalesModel.create();
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "insertId" com o valor de "3"', async () => {
      const [response] = await SalesModel.create();

      expect(response[0]).to.have.a.property("insertId");
      expect(response[0].insertId).to.be.a("number");
      expect(response[0].insertId).to.equal(3);
    });
  });

  describe('remove', () => {

    before(() => {  
      sinon.stub(connection, 'execute').resolves([[sales.SUCCESSFULLY_REMOVED]]);
    });
  
    after(() => {
      connection.execute.restore();
    });

    it('deve retornar um objeto', async () => {
      const [response] = await SalesModel.remove(2);
    
      expect(response[0]).to.be.an("object");
    });

    it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
      const [response] = await SalesModel.remove(2);

      expect(response[0]).to.have.a.property("affectedRows");
      expect(response[0].affectedRows).to.be.a("number");
      expect(response[0].affectedRows).to.equal(1);
    });
  });
});