import _database from '../util/database.json'
import { Transaction, TransactionType } from '../domain/types/Transaction'

function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

const database = _database as Array<Transaction>

const getTransactions = () => {
  database.sort((item_a: Transaction, item_b: Transaction) => { return new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf() }).reverse()
  return groupBy(database, database => new Date(database.timestamp).toLocaleDateString('pt-BR'))
}

const getTransactionsByType = (type: TransactionType) => {
  const dbFiltered = database
    .filter((item: Transaction) => item.type == type)
    .sort((item_a: Transaction, item_b: Transaction) => { return new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf() })
    .reverse()
  return groupBy(dbFiltered, database => new Date(database.timestamp).toLocaleDateString('pt-BR'))
}

const getTransaction = (id: number) => {
  return database.find((item: Transaction) => item.id == id)
}

const getTransactionsByTypeAndMonth = (type: TransactionType, month: number) => {
  const dbFiltered = database
    .filter((item: Transaction) => item.type == type)
    .filter((item: Transaction) => new Date(item.timestamp).getMonth() == month)
    .sort((item_a: Transaction, item_b: Transaction) => { return new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf() })
    .reverse()
    
  return groupBy(dbFiltered, database => new Date(database.timestamp).toLocaleDateString('pt-BR'))
}

export { 
  getTransactions, 
  getTransactionsByType,
  getTransaction,
  getTransactionsByTypeAndMonth
}