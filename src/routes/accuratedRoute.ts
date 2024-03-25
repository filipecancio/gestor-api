import express, {Request} from 'express'
import {
    getMonthlyTransactions,
    getTransactionsSum
  } from '../controller/TransactionController'
  import { TransactionQuery } from '../domain/types/TransactionRequest';

const router = express.Router();

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

export default router
