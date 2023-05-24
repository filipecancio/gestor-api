import _database from '../util/database.json'
import { Transaction } from '../domain/types/Transaction'

const groupBy = function (prop: string) {
  //return this.reduce((acc: any, item: any) => {
  //  if (!acc[item[prop]]) acc[item[prop]] = []
  //  acc[item[prop]].push(item)
  //  return acc
  //}, {});
}

const database = _database as Array<Transaction>

const getTransactions = () => database
  .sort((item: any) => item.timestamp)

export { getTransactions }