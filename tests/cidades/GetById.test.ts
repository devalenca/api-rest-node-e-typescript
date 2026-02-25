import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - GetById', () => {

  it('Deve retornar um registro específico', async () => {
    const createResponse = await testServer
      .post('/cidades')
      .send({ nome: 'Cidade Teste' });

    expect(createResponse.statusCode).toEqual(StatusCodes.CREATED);

    const response = await testServer
      .get(`/cidades/${createResponse.body}`)
      .send();

    expect(response.statusCode).toEqual(StatusCodes.OK);
});

  it('Tenta consultar registro inexistente', async () => {
    const response = await testServer
      .get('/cidades/99999')
      .send();

    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
