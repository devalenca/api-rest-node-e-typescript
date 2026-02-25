import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";


interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}
export const getAllValidation = validation ((getSchema) =>({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional()
  }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  res.setHeader('access-control-expose-headers', 'X-Total-Count');
  res.setHeader('X-Total-Count', '1');

  console.log("Iniciando consulta de cidades com os dados:", req.query);

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Cidade Teste'
    }
  ]);
};
