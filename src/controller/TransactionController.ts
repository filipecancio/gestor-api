import database from '../util/database.json'

const groupBy = function (prop: string) {
  //return this.reduce((acc: any, item: any) => {
  //  if (!acc[item[prop]]) acc[item[prop]] = []
  //  acc[item[prop]].push(item)
  //  return acc
  //}, {});
}

const getTransactions = () => database
  .sort((item: any) => item.timestamp)

export { getTransactions }