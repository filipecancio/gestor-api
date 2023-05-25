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

const getTransactionsByType = (aaaaa: string) => {
  const aaaa = database
    .filter((item: Transaction) => item.type.valueOf().toString() == aaaaa)
  aaaa
    .sort((item_a: Transaction, item_b: Transaction) => { return new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf() })
    .reverse()
  //return type.valueOf()
  return groupBy(database, database => new Date(database.timestamp).toLocaleDateString('pt-BR'))
}

export { getTransactions, getTransactionsByType }