import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'
const router =  Router();


router.post('/teste', (req, res) => {
  console.log(req.body);
  if (req.body.id) {
    console.log(req.body.id);
  }
  else {
    console.log('ID não fornecido');
    return res.status(400).json({ error: 'ID não fornecido' });
  }

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.get('/teste-get', (req, res) => {
  return res.send('Olá, GET DEV!');
});




export { router };