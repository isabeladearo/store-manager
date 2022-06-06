const sinon = require("sinon");
const { expect } = require("chai");

const { ProductsController } = require("../../../controllers");
const { ProductsService } = require("../../../services");
const { products } = require("../mocks");

describe('🟠 Controllers | Products', () => {
  const req = {}, res = {};
  describe('getAll', () => {

    before(() => {  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(ProductsService, 'getAll').resolves([products.GET_ALL_PRODUCTS]);
    });
  
    after(() => {
      ProductsService.getAll.restore();
    });

    it('deve retornar o "status" 200', async () => {
      await ProductsController.getAll(req, res);
    
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve retornar um array de objetos', async () => {
      await ProductsController.getAll(req, res);
    
      expect(res.json.calledWith(products.GET_ALL_PRODUCTS)).to.be.true;
    });
  });

  describe('getById', () => {

    describe('quando o produto é encontrado', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'getById').resolves([products.GET_BY_ID]);
      });
    
      after(() => {
        ProductsService.getById.restore();
      });

      it('deve retornar o "status" 200', async () => {
        await ProductsController.getById(req, res);
      
        expect(res.status.calledWith(200)).to.be.true;
      });
  
      it('deve retornar o objeto do id solicitado', async () => {
        await ProductsController.getById(req, res);

        expect(res.json.calledWith(products.GET_BY_ID[0])).to.be.true;
      });
    })

    describe('quando o produto não é encontrado', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'getById').resolves([[]]);
      });
    
      after(() => {
        ProductsService.getById.restore();
      });

      it('deve retornar o "status" 404', async () => {
        await ProductsController.getById(req, res);
      
        expect(res.status.calledWith(404)).to.be.true;
      });
  
      it('deve retornar a mensagem "Product not found"', async () => {
        await ProductsController.getById(req, res);

        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });
  });

  describe('create', () => {
    describe('quando o produto já existe', () => {

      before(() => {
        req.body = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'create').resolves(false);
      });
    
      after(() => {
        ProductsService.create.restore();
      });
  
      it('deve retornar o "status" 409', async () => {
        await ProductsController.create(req, res);
      
        expect(res.status.calledWith(409)).to.be.true;
      });
  
      it('deve retornar a mensagem "Product already exists"', async () => {
        await ProductsController.create(req, res);
  
        expect(res.json.calledWith({ message: 'Product already exists' })).to.be.true;
      });
    });

    describe('quando é inserido com sucesso', () => {

      before(() => {
        req.body = products.PRODUCT_TO_CREATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'create').resolves(products.CREATED_PRODUCT);
      });
    
      after(() => {
        ProductsService.create.restore();
      });

      it('deve retornar o "status" 201', async () => {
        await ProductsController.create(req, res);
      
        expect(res.status.calledWith(201)).to.be.true;
      });
  
      it('deve retornar o objeto criado', async () => {
        await ProductsController.create(req, res);

        expect(res.json.calledWith(products.CREATED_PRODUCT)).to.be.true;
      });
    });
  });

  describe('update', () => {
    describe('quando o produto não existe', () => {

      before(() => {
        req.params = { id: 1 };
        req.body = products.PRODUCT_TO_UPDATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'update').resolves(false);
      });
    
      after(() => {
        ProductsService.update.restore();
      });
  
      it('deve retornar o "status" 404', async () => {
        await ProductsController.update(req, res);
      
        expect(res.status.calledWith(404)).to.be.true;
      });
  
      it('deve retornar a mensagem "Product not found"', async () => {
        await ProductsController.update(req, res);
  
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });

    describe('quando é atualizado com sucesso', () => {

      before(() => {
        req.params = { id: 1 };
        req.body = products.PRODUCT_TO_UPDATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'update').resolves(products.PRODUCT_1);
      });
    
      after(() => {
        ProductsService.update.restore();
      });

      it('deve retornar o "status" 200', async () => {
        await ProductsController.update(req, res);
      
        expect(res.status.calledWith(200)).to.be.true;
      });
  
      it('deve retornar o objeto atualizado', async () => {
        await ProductsController.update(req, res);

        expect(res.json.calledWith(products.PRODUCT_1)).to.be.true;
      });
    });
  });

  describe('remove', () => {
    describe('quando o produto não existe', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'remove').resolves(false);
      });
    
      after(() => {
        ProductsService.remove.restore();
      });
  
      it('deve retornar o "status" 404', async () => {
        await ProductsController.remove(req, res);
      
        expect(res.status.calledWith(404)).to.be.true;
      });
  
      it('deve retornar a mensagem "Product not found"', async () => {
        await ProductsController.remove(req, res);
  
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });

    describe('quando é atualizado com sucesso', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.end = sinon.stub().returns();
    
        sinon.stub(ProductsService, 'remove').resolves(true);
      });
    
      after(() => {
        ProductsService.remove.restore();
      });

      it('deve retornar o "status" 204', async () => {
        await ProductsController.remove(req, res);
      
        expect(res.status.calledWith(204)).to.be.true;
      });
    });
  });
});
