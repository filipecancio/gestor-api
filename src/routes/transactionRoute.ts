import express from 'express'
import {
  getTransactions,
  getTransactionsByType
} from '../controller/TransactionController'
import { TransactionType } from '../domain/types/Transaction'

const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).send(getTransactions());
});

router.get('/:type', (req, res) => {
  const type: string = req.params.type;
  res.status(200).send(getTransactionsByType(type));
});

export default router