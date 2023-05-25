import express from 'express'
import {
  getTransactions,
  getTransactionsByType,
  getTransaction
} from '../controller/TransactionController'
import { TransactionType } from '../domain/types/Transaction'

const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).send(getTransactions());
});

router.get('/type/:type', (req, res) => {
  const type: TransactionType = +req.params.type;
  res.status(200).send(getTransactionsByType(type));
});

router.get('/transaction/:id', (req, res) => {
  const id: number = +req.params.id;
  res.status(200).send(getTransaction(id));
});

export default router