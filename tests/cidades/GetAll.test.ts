import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - GetAll', () => {

  it('Deve retornar uma lista de cidades', async () => {

    const createResponse = await testServer
      .post('/cidades')
      .send({ nome: 'Cidade Teste' });

    expect(createResponse.statusCode).toEqual(StatusCodes.CREATED);

    const response = await testServer
      .get('/cidades')
      .send();


    expect(Number(response.header['x-total-count'])).toBeGreaterThan(0);
    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
