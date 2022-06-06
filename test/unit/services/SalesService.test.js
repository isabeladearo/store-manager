const sinon = require("sinon");
const { expect } = require("chai");

const { SalesService, ProductsService } = require("../../../services");
const { SalesModel, SalesProductsModel, ProductsModel } = require("../../../models");
const { sales, products } = require("../mocks");

describe('🟢 Services | Sales', () => {

  describe('getAll', () => {

    before(() => {  
      sinon.stub(SalesModel, 'getAll').resolves([sales.GET_ALL_SALES]);
    });
  
    after(() => {
      SalesModel.getAll.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [sales] = await SalesService.getAll();
    
      expect(sales).to.be.an("array");
    });

    it('cada objeto deve possuir as propriedades: "saleId", "productId", "quantity" e "date"', async () => {
      const [sales] = await SalesService.getAll();
    
      sales.forEach((sale) =>
        expect(sale).to.include.all.keys("saleId", "productId", "quantity", "date")
      );
    });
  });

  describe('getById', () => {

    before(() => {  
      sinon.stub(SalesModel, 'getById').resolves([sales.GET_BY_ID]);
    });
  
    after(() => {
      SalesModel.getById.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [sales] = await SalesService.getById(1);
    
      expect(sales).to.be.an("array");
    });

    it('o objeto deve possuir as propriedades: "productId", "quantity" e "date"', async () => {
      const [sales] = await SalesService.getById(1);

      sales.forEach((sale) =>
        expect(sale).to.include.all.keys("productId", "quantity", "date")
      );
    });
  });

  describe('create', () => {

    describe('quando não existe a quantidade do produto no estoque', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getById').resolves([[{ product_id: 1, quantity: 0 }]]);
      });
    
      after(() => {
        ProductsModel.getById.restore();
      });
  
      it('deve retornar falso', async () => {
        const response = await SalesService.create([{ product_id: 1, quantity: 2 }]);
      
        expect(response).to.be.a("boolean");
        expect(response).to.be.false;
      });
    });
  });
});
