const express = require('express');
const checkListsRouter = require('./src/routes/checklist')
require('./config/database')

const app = express();
app.use(express.json());

app.use('/checklists', checkListsRouter);


app.listen(3000, () => {
  console.log('Servidor foi iniciado');
})