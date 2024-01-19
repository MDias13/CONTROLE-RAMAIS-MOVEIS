require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const server = express();

// Middleware para aceitar requisições JSON
server.use(bodyParser.json());

// Middleware para aceitar requisições de formulário
server.use(bodyParser.urlencoded({ extended: false }));

// Middleware para permitir CORS
server.use(cors());

// Rotas
server.use('/api', routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});