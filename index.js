var express = require('express');
var bodyParser = require('body-parser');
var DataStore = require('nedb');

var port = 3000;
var BASE_API_PATH = "/api/v1";
var DB_FILE_NAME = __dirname + "/orders.json";

console.log("Starting API server...");

var app = express();
app.use(bodyParser.json());

var db = new DataStore({
    filename: DB_FILE_NAME,
    autoload: true
});

app.get("/", (req, res) =>{
    res.send("<html><body><h1>My Server</h1></body></html>");
});

app.get(BASE_API_PATH + "/orders", (req, res) => {
    console.log(Date() + " - GET /orders");
    res.send([]);
});

app.post(BASE_API_PATH + "/orders", (req, res) => {
    console.log(Date() + " - POST /orders");
    var order = req.body;
    db.insert(order, (err) => {
        if(err) {
            console.log(Date() + " - " + err);
        }else{
            res.sendStatus(201);
        }
    });
});

app.listen(port);

console.log("Server ready!");