const express = require('express');
const router = express.Router();
const {getTransactions} = require("../controller/TransactionController");

router.get('/', (req, res) => {
    res.status(200).send(getTransactions());
  });

module.exports = router;