const database = require("../util/database.json");

exports.getTransactions = () => database
  .sort((item) => item.timestamp)
  .groupBy('bank');

Array.prototype.groupBy = function (prop) {
  return this.reduce((acc, item) => {
    if (!acc[item[prop]]) acc[item[prop]] = []
    acc[item[prop]].push(item)
    return acc
  }, {});
}