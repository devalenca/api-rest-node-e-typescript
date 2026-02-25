import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Cidades - DeleteById', () => {

  it('Deleta registro', async () => {

    const createResponse = await testServer
      .post('/cidades')
      .send({nome: 'Cidade Teste'});

    expect(createResponse.statusCode).toEqual(StatusCodes.CREATED);


    const responseApagada = await testServer
      .delete(`/cidades/${createResponse.body}`)
      .send();

    expect(responseApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    expect(responseApagada.body).toEqual({});
  });

  it('Tenta deletar registro inexistente', async () => {
    const response = await testServer
      .delete('/cidades/99999')
      .send();

    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
