const sinon = require("sinon");
const { expect } = require("chai");

const { SalesController } = require("../../../controllers");
const { SalesService } = require("../../../services");
const { sales } = require("../mocks");

describe('🟠 Controllers | Sales', () => {
  const req = {}, res = {};
  describe('getAll', () => {

    before(() => {  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(SalesService, 'getAll').resolves([sales.GET_ALL_SALES]);
    });
  
    after(() => {
      SalesService.getAll.restore();
    });

    it('deve retornar o "status" 200', async () => {
      await SalesController.getAll(req, res);
    
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve retornar um array de objetos', async () => {
      await SalesController.getAll(req, res);
    
      expect(res.json.calledWith(sales.GET_ALL_SALES)).to.be.true;
    });
  });

  describe('getById', () => {

    describe('quando o produto é encontrado', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'getById').resolves([sales.GET_BY_ID]);
      });
    
      after(() => {
        SalesService.getById.restore();
      });

      it('deve retornar o "status" 200', async () => {
        await SalesController.getById(req, res);
      
        expect(res.status.calledWith(200)).to.be.true;
      });
  
      it('deve retornar o objeto do id solicitado', async () => {
        await SalesController.getById(req, res);

        expect(res.json.calledWith(sales.GET_BY_ID)).to.be.true;
      });
    })

    describe('quando o produto não é encontrado', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'getById').resolves([[]]);
      });
    
      after(() => {
        SalesService.getById.restore();
      });

      it('deve retornar o "status" 404', async () => {
        await SalesController.getById(req, res);
      
        expect(res.status.calledWith(404)).to.be.true;
      });
  
      it('deve retornar a mensagem "Sale not found"', async () => {
        await SalesController.getById(req, res);

        expect(res.json.calledWith({ message: 'Sale not found' })).to.be.true;
      });
    });
  });

  describe('create', () => {
    describe('quando a quantidade de produto não é permitida', () => {

      before(() => {
        req.body = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'create').resolves(false);
      });
    
      after(() => {
        SalesService.create.restore();
      });
  
      it('deve retornar o "status" 422', async () => {
        await SalesController.create(req, res);
      
        expect(res.status.calledWith(422)).to.be.true;
      });
  
      it('deve retornar a mensagem "Such amount is not permitted to sell"', async () => {
        await SalesController.create(req, res);
  
        expect(res.json.calledWith({ message: 'Such amount is not permitted to sell' })).to.be.true;
      });
    });

    describe('quando é inserido com sucesso', () => {

      before(() => {
        req.body = sales.SALE_TO_CREATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'create').resolves(sales.CREATED_SALE);
      });
    
      after(() => {
        SalesService.create.restore();
      });

      it('deve retornar o "status" 201', async () => {
        await SalesController.create(req, res);
      
        expect(res.status.calledWith(201)).to.be.true;
      });
  
      it('deve retornar o objeto criado', async () => {
        await SalesController.create(req, res);

        expect(res.json.calledWith(sales.CREATED_SALE)).to.be.true;
      });
    });
  });

  describe('update', () => {
    describe('quando a quantidade de produto não é permitida', () => {

      before(() => {
        req.params = { id: 1 };
        req.body = sales.SALE_TO_UPDATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'update').resolves(false);
      });
    
      after(() => {
        SalesService.update.restore();
      });
  
      it('deve retornar o "status" 422', async () => {
        await SalesController.update(req, res);
      
        expect(res.status.calledWith(422)).to.be.true;
      });
  
      it('deve retornar a mensagem "Such amount is not permitted to sell"', async () => {
        await SalesController.update(req, res);
  
        expect(res.json.calledWith({ message: 'Such amount is not permitted to sell' })).to.be.true;
      });
    });

    describe('quando é atualizado com sucesso', () => {

      before(() => {
        req.params = { id: 1 };
        req.body = sales.SALE_TO_UPDATE;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'update').resolves(sales.UPDATED_SALE);
      });
    
      after(() => {
        SalesService.update.restore();
      });

      it('deve retornar o "status" 200', async () => {
        await SalesController.update(req, res);
      
        expect(res.status.calledWith(200)).to.be.true;
      });
  
      it('deve retornar o objeto atualizado', async () => {
        await SalesController.update(req, res);

        expect(res.json.calledWith(sales.UPDATED_SALE)).to.be.true;
      });
    });
  });

  describe('remove', () => {
    describe('quando o id da venda não existe', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    
        sinon.stub(SalesService, 'remove').resolves(false);
      });
    
      after(() => {
        SalesService.remove.restore();
      });
  
      it('deve retornar o "status" 404', async () => {
        await SalesController.remove(req, res);
      
        expect(res.status.calledWith(404)).to.be.true;
      });
  
      it('deve retornar a mensagem "Sale not found"', async () => {
        await SalesController.remove(req, res);
  
        expect(res.json.calledWith({ message: 'Sale not found' })).to.be.true;
      });
    });

    describe('quando é removido com sucesso', () => {

      before(() => {
        req.params = { id: 1 };
        res.status = sinon.stub().returns(res);
        res.end = sinon.stub().returns();
    
        sinon.stub(SalesService, 'remove').resolves(true);
      });
    
      after(() => {
        SalesService.remove.restore();
      });

      it('deve retornar o "status" 204', async () => {
        await SalesController.remove(req, res);
      
        expect(res.status.calledWith(204)).to.be.true;
      });
    });
  });
});
