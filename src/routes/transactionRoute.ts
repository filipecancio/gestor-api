import express, {Request} from 'express'
import {
  getTransaction,
  getTransactions,
  getMonthlyTransactions,
  getTransactionsSum,
  getTotalTransactionsValues
} from '../controller/TransactionController'
import { TransactionQuery } from '../domain/types/TransactionRequest';

const router = express.Router();

router.get('/all/:id', (req, res) => {
  const id: number = +req.params.id;
  res.status(200).send(getTransaction(id));
});

router.get('/all/', (req: Request<{}, any, any, TransactionQuery, Record<string, any>> , res) => {
  console.log(`request: type - ${req.query.type}`)
  res.status(200).send(
    getTransactions(
      req.query.type, 
      req.query.month,
      req.query.year,
      req.query.description
    )
    );
});

router.get('/monthly', (req, res) => {
  res.status(200).send(
    getMonthlyTransactions()
  )
})

router.get('/sum', (req: Request<{}, any, any, TransactionQuery, Record<string, any>> , res) => {
  res.status(200).send(
      getTransactionsSum(
          req.query.type, 
          req.query.month,
          req.query.year
    )
  );
})

router.get('/sum/total', (req: Request<{}, any, any, TransactionQuery, Record<string, any>> , res) => {
  res.status(200).send(
    getTotalTransactionsValues(
          req.query.month,
          req.query.year
    )
  );
})

export default router