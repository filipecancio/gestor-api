const express = require('express');
const database = require("./util/database.json");

const app = express();

const port = process.env.PORT || 3000;

const data = {
  "message": "Hello World"
}

app.get('/', (req, res) => {
  res.status(200).send(getTransactions());
});

const getTransactions = () => database
  .sort((item) => item.timestamp)
  .groupBy('bank');

Array.prototype.groupBy = function (prop) {
  return this.reduce((acc, item) => {
    if (!acc[item[prop]]) acc[item[prop]] = []
    acc[item[prop]].push(item)
    return acc
  }, {});
}

app.listen(port);
console.log(`Aplicação executando no endereco http://localhost:${port}`);