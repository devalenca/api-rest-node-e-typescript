import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Create Cidade', () => {

  it('Cria registro', async () => {

    const response = await testServer
      .post('/cidades')
      .send({ nome: 'São Paulo' });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof response.body).toEqual('number');
  });

  it('Tenta criar registro com nome muito curto', async () => {

    const response = await testServer
      .post('/cidades')
      .send({ nome: 'Sã' });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.nome');
  });
});
