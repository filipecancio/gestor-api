const express = require('express');
const transactions = require('./routes/transactionRoute');

const app = express();

const port = process.env.PORT || 3000;

const data = {
  "transactions": "http://localhost:3000/transactions"
}

app.use('/transactions', transactions);

app.get('/', (req, res) => {
  res.status(200).send(data);
});

app.listen(port);
console.log(`Aplicação executando no endereco http://localhost:${port}`);