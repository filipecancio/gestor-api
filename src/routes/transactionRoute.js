const express = require('express');
const router = express.Router();
const database = require("../util/database.json");

router.get('/', (req, res) => {
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

module.exports = router;