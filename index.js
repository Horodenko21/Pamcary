const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const usuarioRoute = require('./routes/usuarioRoute');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.js"]
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(usuarioRoute);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}