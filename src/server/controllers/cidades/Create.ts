import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";


interface ICidade {
  nome: string;
  estado: string;
}

interface IFilter{
  filter?: string;
}

export const createValidation = validation ((getSchema) =>({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().required().min(3),
  }))
}));


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log("Recebido request para criação de cidade.");
  const data: ICidade = req.body;

  console.log("Iniciando criação de cidade com os dados:", data);

  return res.status(StatusCodes.CREATED).json({ message: "Cidade criada com sucesso!", cidade: data });
}
