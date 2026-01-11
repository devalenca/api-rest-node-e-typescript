import { server } from './server/Server';

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
