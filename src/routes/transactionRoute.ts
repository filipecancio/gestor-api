import express, {Request} from 'express'
import {
  getTransaction,
  getTransactions
} from '../controller/TransactionController'
import { TransactionQuery } from '../domain/types/TransactionRequest';

const router = express.Router();

router.get('/filter/:id', (req, res) => {
  const id: number = +req.params.id;
  res.status(200).send(getTransaction(id));
});

router.get('/filter', (req: Request<{}, any, any, TransactionQuery, Record<string, any>> , res) => {
  res.status(200).send(
    getTransactions(
      req.query.type, 
      req.query.month,
      req.query.year,
      req.query.description
    )
    );
});

export default router