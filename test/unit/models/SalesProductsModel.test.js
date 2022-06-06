// const sinon = require("sinon");
// const { expect } = require("chai");

// const connection = require("../../../db/connection");
// const { SalesProductsModel } = require("../../../models");
// const { salesProducts } = require("../mocks");

// describe('🟣 Models | SalesProducts', () => {
//   describe('create', () => {

//     before(() => {  
//       sinon.stub(connection, 'execute').resolves([[salesProducts.SUCCESSFULLY_CREATED]]);
//     });
  
//     after(() => {
//       connection.execute.restore();
//     });

//     it('deve retornar um objeto', async () => {
//       const [response] = await SalesProductsModel.create(3, 1, 5);
    
//       expect(response[0]).to.be.an("object");
//     });

//     it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
//       const [response] = await SalesProductsModel.create(3, 1, 5);

//       expect(response[0]).to.have.a.property("insertId");
//       expect(response[0].affectedRows).to.be.a("number");
//       expect(response[0].affectedRows).to.equal(1);
//     });
//   });

//   describe('update', () => {

//     before(() => {  
//       sinon.stub(connection, 'execute').resolves([[salesProducts.SUCCESSFULLY_UPDATED]]);
//     });
  
//     after(() => {
//       connection.execute.restore();
//     });
    
//     it('deve retornar um objeto', async () => {
//       const [response] = await SalesProductsModel.update(3, 1, 3);
    
//       expect(response[0]).to.be.an("object");
//     });

//     it('o objeto deve possuir a propriedade "affectedRows" com o valor de "1"', async () => {
//       const [response] = await SalesProductsModel.update(3, 1, 3);

//       expect(response[0]).to.have.a.property("affectedRows");
//       expect(response[0].affectedRows).to.be.a("number");
//       expect(response[0].affectedRows).to.equal(1);
//     });
//   });

//   describe('remove', () => {

//     before(() => {  
//       sinon.stub(connection, 'execute').resolves([[salesProducts.SUCCESSFULLY_REMOVED]]);
//     });
  
//     after(() => {
//       connection.execute.restore();
//     });

//     it('deve retornar um array de objeto', async () => {
//       const [response] = await SalesProductsModel.remove(3);
  
//       expect(response[0]).to.be.an("object");
//     });

//     it('o objeto deve possuir a propriedades "affectedRows"', async () => {
//       const [response] = await SalesProductsModel.remove(3);

//       expect(response[0]).to.have.a.property("affectedRows");
//     });
//   });
// });