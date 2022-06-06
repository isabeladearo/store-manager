const sinon = require("sinon");
const { expect } = require("chai");

const { ProductsService } = require("../../../services");
const { ProductsModel } = require("../../../models");
const { products } = require("../mocks");

describe('🟢 Services | Products', () => {

  describe('getAll', () => {

    before(() => {  
      sinon.stub(ProductsModel, 'getAll').resolves([products.GET_ALL_PRODUCTS]);
    });
  
    after(() => {
      ProductsModel.getAll.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [products] = await ProductsService.getAll();
    
      expect(products).to.be.an("array");
    });

    it('cada objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
      const [products] = await ProductsService.getAll();
    
      products.forEach((product) =>
        expect(product).to.include.all.keys("id", "name", "quantity")
      );
    });
  });

  describe('getById', () => {

    before(() => {  
      sinon.stub(ProductsModel, 'getById').resolves([products.GET_BY_ID]);
    });
  
    after(() => {
      ProductsModel.getById.restore();
    });

    it('deve retornar um array de objetos', async () => {
      const [products] = await ProductsService.getById(1);
    
      expect(products).to.be.an("array");
    });

    it('o objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
      const [product] = await ProductsService.getById(1);

      expect(product[0]).to.include.all.keys("id", "name", "quantity")
    });
  });

  describe('create', () => {

    describe('quando o produto já existe', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getByName').resolves([[products.CREATED_PRODUCT]]);
        sinon.stub(ProductsModel, 'create').resolves(false);
      });
    
      after(() => {
        ProductsModel.getByName.restore();
        ProductsModel.create.restore();
      });
  
      it('deve retornar falso', async () => {
        const createdProduct = await ProductsService.create(products.PRODUCT_TO_CREATE);
      
        expect(createdProduct).to.be.a("boolean");
        expect(createdProduct).to.be.false;
      });
    });

    describe('quando é inserido com sucesso', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getByName').resolves([[]]);
        sinon.stub(ProductsModel, 'create').resolves([products.SUCCESSFULLY_CREATED]);
      });
    
      after(() => {
        ProductsModel.getByName.restore();
        ProductsModel.create.restore();
      });

      it('deve retornar um objeto', async () => {
        const createdProduct = await ProductsService.create(products.PRODUCT_TO_CREATE);
      
        expect(createdProduct).to.be.an("object");
      });

      it('o objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
        const product = await ProductsService.create(products.PRODUCT_TO_CREATE);
  
        expect(product).to.include.all.keys("id", "name", "quantity")
      });
    });
  });

  describe('update', () => {

    describe('quando o produto não existe', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getById').resolves([[]]);
        sinon.stub(ProductsModel, 'update').resolves(false);
      });
    
      after(() => {
        ProductsModel.getById.restore();
        ProductsModel.update.restore();
      });
  
      it('deve retornar falso', async () => {
        const updatedProduct = await ProductsService.update(1, products.PRODUCT_TO_UPDATE);

        expect(updatedProduct).to.be.a("boolean");
        expect(updatedProduct).to.be.false;
      });
    });

    describe('quando é atualizado com sucesso', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getById').resolves([[products.UPDATED_PRODUCT]]);
        sinon.stub(ProductsModel, 'update').resolves([products.SUCCESSFULLY_UPDATED]);
      });
    
      after(() => {
        ProductsModel.getById.restore();
        ProductsModel.update.restore();
      });

      const { name, quantity } = products.PRODUCT_TO_UPDATE;

      it('deve retornar um objeto', async () => {
        const createdProduct = await ProductsService.update(1, name, quantity);
      
        expect(createdProduct).to.be.an("object");
      });

      it('o objeto deve possuir as propriedades: "id", "name" e "quantity"', async () => {
        const product = await ProductsService.update(1, name, quantity);
  
        expect(product).to.include.all.keys("id", "name", "quantity")
      });
    });
  });

  describe('remove', () => {

    describe('quando o produto não existe', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getById').resolves([[]]);
        sinon.stub(ProductsModel, 'remove').resolves(false);
      });
    
      after(() => {
        ProductsModel.getById.restore();
        ProductsModel.remove.restore();
      });
  
      it('deve retornar falso', async () => {
        const removedProduct = await ProductsService.remove(1);

        expect(removedProduct).to.be.a("boolean");
        expect(removedProduct).to.be.false;
      });
    });

    describe('quando é removido com sucesso', () => {

      before(() => {  
        sinon.stub(ProductsModel, 'getById').resolves([[products.UPDATED_PRODUCT]]);
        sinon.stub(ProductsModel, 'remove').resolves([products.SUCCESSFULLY_UPDATED]);
      });
    
      after(() => {
        ProductsModel.getById.restore();
        ProductsModel.remove.restore();
      });

      it('deve retornar verdadeiro', async () => {
        const removedProduct = await ProductsService.remove(1);

        expect(removedProduct).to.be.a("boolean");
        expect(removedProduct).to.be.true;
      });
    });
  });
});
