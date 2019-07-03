let mongodb = require("mongodb");
let axios = require("axios");
// let mongoConnection = await require("../mongoClient");
let moviesDAO = {};
// let conectionURI = "mongodb://m220student:m220password@mflix-shard-00-00-kdqfd.mongodb.net:27017,mflix-shard-00-01-kdqfd.mongodb.net:27017,mflix-shard-00-02-kdqfd.mongodb.net:27017/test?ssl=true&replicaSet=mflix-shard-0&authSource=admin&retryWrites=true";
let conectionURI = process.env.conectionURI;
let connection
let moviesCollection
let mongoClient = mongodb.MongoClient;
mongoClient.connect(conectionURI,{ useNewUrlParser: true })
.catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    connection = client;
    moviesCollection = connection.db("mflix").collection("movies");
  })


moviesDAO.getMovies = async (start) => {
    let movies = await moviesCollection
                              .find({"year": {$gt : 2010},"poster" : {$nin : [undefined,null,""]} })
                              .sort({year : -1})
                              .skip(start)
                              .limit(20)
                              .toArray();;
    return movies
};

moviesDAO.getCommentsforMovie = async (id) =>{
  let comments = await connection.db("mflix").collection("comments")
                              .find({"movie_id": mongodb.ObjectID(id)})
                              .toArray();
  return comments;
}
moviesDAO.getMovie = async (id) =>{
  let movies = await connection.db("mflix").collection("movies").find({"_id": mongodb.ObjectID(id)}).toArray();
  return movies[0];
}

// Uses the youtube API to get the first matching video search results for the passed query
moviesDAO.getYoutubeId = async (query) =>{
  let APIKey = "AIzaSyCCOR6L4edVNgZTbpxMmRWwom2_vY0hfzc";
  query = encodeURIComponent(query);
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&fields=items&key=${APIKey}`;
  let response = await axios.get(url);
  console.log(response.data);
  return response.data.items[0].id.videoId;

};
module.exports = moviesDAO;