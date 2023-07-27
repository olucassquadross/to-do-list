const express = require('express');
const cors = require('cors');
const app = express();
const port = 3010;
const readline = require('readline');

app.use(cors()); // Adicione esta linha para permitir o CORS

// Variável no backend
const minhaVariavel = "Olá do backend!";

// Rota para fornecer a variável ao front-end
app.get('/', (req, res) => {
  res.send({ minhaVariavel });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
