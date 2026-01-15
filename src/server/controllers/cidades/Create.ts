import { Request, Response} from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";


interface ICidade{
  nome: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required("Nome is required").min(3, "Nome must be at least 3 characters long"),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined = undefined;
  const data: ICidade = req.body;

  try {
    validatedData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.status(StatusCodes.BAD_REQUEST).json({ error:
      {
        default: yupError.message,
      }
    });
  }

  console.log("Creating cidade with data:", data);

  return res.status(StatusCodes.CREATED).json({ message: "Cidade created successfully" });
}
