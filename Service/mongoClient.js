let mongodb = require("mongodb");
let moviesDAO = require("./dao/movies.dao");

let conectionURI = "mongodb://m220student:m220password@mflix-shard-00-00-kdqfd.mongodb.net:27017,mflix-shard-00-01-kdqfd.mongodb.net:27017,mflix-shard-00-02-kdqfd.mongodb.net:27017/test?ssl=true&replicaSet=mflix-shard-0&authSource=admin&retryWrites=true";

let mongoClient = mongodb.MongoClient;
let conn;
module.exports = mongoClient.connect(conectionURI,{ useNewUrlParser: true })
.catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    return Promise.resolve(await client);
  });