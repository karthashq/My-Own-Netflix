let express = require("express");
let cors = require("cors");
let bodyParser = require('body-parser');
let moviesRoute = require('./Service/routes/movies.route');
let app = express();
let port = process.env.PORT || 5000;

// This code allows us to allow access to our APIs from all domains
// app.use("/*", (req, res, next) =>{
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors());
app.use(bodyParser.json());

app.get("/testing", (req, res) => {
	res.json({ value: "Tested Ok." });
	res.end();
})

app.use(moviesRoute);

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {root:distDir});
});

app.listen(port,function(){
    console.log("App listening on port ",port);
});
