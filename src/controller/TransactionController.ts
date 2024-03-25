import _database from '../util/database.json'
import { Transaction, TransactionType } from '../domain/types/Transaction'
import { it } from 'node:test';

function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

const database = _database as Array<Transaction>

const getTransactions = (
  type?: TransactionType,
  month?: number,
  year?: number,
  description?: string,
) => {
  let dbFiltered = database
  if (type) {
    dbFiltered = dbFiltered.filter((item: Transaction) => item.type == type)
  }
  if (month) {
    dbFiltered = dbFiltered.filter((item: Transaction) => new Date(item.timestamp).getMonth() == month)
  }
  if (year) {
    dbFiltered = dbFiltered.filter((item: Transaction) => new Date(item.timestamp).getFullYear() == year)
  }
  if (description) {
    dbFiltered = dbFiltered.filter((item: Transaction) => item.description?.toLowerCase().includes(description.toLowerCase()))
  }

  dbFiltered = sortedByDescending(dbFiltered)
  return groupByDateFormat(dbFiltered)
}

const getTransaction = (id: number) => {
  return database.find((item: Transaction) => item.id == id)
}

const getMonthlyTransactions = () => {
  let dbFiltered = database

  dbFiltered = sortedByDescending(dbFiltered)
  let mapDbFiltered = groupByDateFormat(dbFiltered)

  let result = Object.keys(mapDbFiltered).map(key => {
    const item = mapDbFiltered[key];
    const valueSum = item.reduce((a, b) => a + b.value, 0);
    const firstTimestamp = new Date(item[0].timestamp).toDateString();

    let transaction : Transaction = {
      id: 1,
      value: valueSum,
      description: key,
      bank: "",
      timestamp: firstTimestamp,
      type: TransactionType.CREDIT
    }

    return transaction
  })

  return result;
}

const getTransactionsSum = (
  type?: TransactionType,
  month?: number,
  year?: number) => {
  let dbFiltered = database
  dbFiltered = sortedByDescending(dbFiltered)
  
  if (type) {
    dbFiltered = dbFiltered.filter((item: Transaction) => item.type == type)
  }
  if (month) {
    dbFiltered = dbFiltered.filter((item: Transaction) => new Date(item.timestamp).getMonth() == month)
  }
  if (year) {
    dbFiltered = dbFiltered.filter((item: Transaction) => new Date(item.timestamp).getFullYear() == year)
  }

  let sum =  dbFiltered.reduce((total, transaction) => total + transaction.value, 0)
  return {"sum": sum}
}

const sortedByDescending = (transactionList: Array<Transaction>) => transactionList
  .sort((item_a: Transaction, item_b: Transaction) => new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf() )
  .reverse()

const groupByDateFormat = (transactionList: Array<Transaction>) => groupBy(transactionList, database => new Date(database.timestamp).toLocaleDateString('pt-BR'))

export {
  getTransaction,
  getTransactions,
  getMonthlyTransactions,
  getTransactionsSum
}