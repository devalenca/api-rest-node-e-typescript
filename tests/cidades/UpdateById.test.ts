import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - UpdateById', () => {

  it('Atualiza registro', async () => {
    const createResponse = await testServer
      .post('/cidades')
      .send({ nome: 'Cidade Teste' });

    expect(createResponse.statusCode).toEqual(StatusCodes.CREATED);

    const responseAtualizada = await testServer
      .put(`/cidades/${createResponse.body}`)
      .send({ nome: 'Cidade Teste Atualizada' });

    expect(responseAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    expect(responseAtualizada.body).toEqual({});
  });

  it('Tenta atualizar registro inexistente', async () => {
    const response = await testServer
      .put('/cidades/99999')
      .send({ nome: 'Cidade Teste Atualizada' });


    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });

});
