import express from 'express'
import {getTransactions} from '../controller/TransactionController'

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send(getTransactions());
  });

  export default router