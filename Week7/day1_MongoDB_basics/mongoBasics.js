const DAEMON = `mongod --dbpath ~/data/db`
const MONGO = {
  initial: `mongo('listens to daemon??')`,
  toShow: 'show dbs',
  useOtherDB: 'use name_db',
  showCollection: 'show collections',
  insert: `db.users.insert( { name: 'bijay', location: 'barcelona', country: 'nepal' } )`,
  findData: 'db.users.find()', // you can also filter db objects with find or remove() to delete
  change: `db.users.update(
              {name: { $eq: 'juanma'}},
              { $set: {name: 'juanmaplus'}}
              )`,
  insertMany: 'db.users.insertMany([{}, {}, {}])'
}

