import express, {Request} from 'express'
import {
  getTransactions,
  getTransactionsByType,
  getTransaction,
  getTransactionsByTypeAndMonth
} from '../controller/TransactionController'
import { TransactionType } from '../domain/types/Transaction'
import { TransactionQuery } from '../domain/types/TransactionRequest';

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

router.get('/aa', (req: Request<{}, any, any, TransactionQuery, Record<string, any>> , res) => {

  const type: TransactionType = req.query.type;
  const month: number = req.query.month;
  res.status(200).send(getTransactionsByTypeAndMonth(type, month));
});

export default router