const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();


mongoose.connect('mongodb+srv://test:test@omnistack-gtr3t.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//GET=Buscar, POST=Criar, PUT=Editar, DELETE=Deletar

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para editar, delete)
// req.body = Acessar corpo da requisição (para criação e edição de registros)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(process.env.PORT || 3333);
