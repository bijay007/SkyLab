const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => { // connecting to db returns object db with methods..
  if (err) throw err
  console.log(`Connected to Mongo NoSQL database named ${db.s.databaseName}`)

  db.collection('restaurants')
    .find({'borough': 'Manhattan', 'address.zipcode': '10075'}) // returns a cursor which we can convert to array of objects (cursos has methods like forEach, toArray, next etc)
    .count((err, count) => console.log(count))
    // .limit(3)
    // .toArray((err, docs) => console.log(docs.length)) // in mongo shell, db.users.find() does all these in 1 getgo

  db.close()
})



// importing a json as db
// mongoimport --db test --collection restaurants --drop --file primer-dataset.json

// Extras
.find($or: [
    {'x':'y'},{'a':'b'}
  ])
.find({}).limit(10).sort({'name': '-1'}).toArray() // -1 means descending order by name eg. z come first

// Projections - second parameter given to find to show only the camps I need

.find({'borough': 'Manhattan'},{name:1, borough:1, _id:0}) // We want to show only name & borough.id is always shown so we have to manually make it not show
// if you want to show all but name, you can simply do {name:0} and bam!!

// if you acess sub-property, you always insert it within "double-quotes"