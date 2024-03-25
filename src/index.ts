import express from 'express'
import transactions from './routes/transactionRoute'
import acctransactions from './routes/accuratedRoute'

const app = express();

const port = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const data = {
  "transactions": "http://localhost:3000/transactions"
}

app.use('/transactions', transactions);

app.use('/extra', acctransactions);

app.get('/', (req, res) => {
  res.status(200).send(data);
});

app.listen(port);
console.log(`Aplicação executando no endereco http://localhost:8000`);