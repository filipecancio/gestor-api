import _database from '../util/database.json'
import { TransactionType } from '../domain/types/Transaction'

function groupBy<T>(arr: T[], fn: (item: T) => any){
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = prev[groupKey] || [];
      group.push(curr);
      return { ...prev, [groupKey]: group };
  }, {});
}

const database = _database as Array<TransactionType>

const getTransactions = () => {
  database.sort((item_a: TransactionType, item_b: TransactionType) => {return new Date(item_a.timestamp).valueOf() - new Date(item_b.timestamp).valueOf()}).reverse()
  return groupBy(database, database => {return new Date(database.timestamp).toLocaleDateString('pt-BR')})
}

export { getTransactions }