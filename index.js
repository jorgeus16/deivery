var express = require('express');

var port = 3000;
var BASE_API_PATH = "/api/v1";

var orders = [
{"date" : "02/05/2020", "state" : "delivered"},
{"date" : "25/09/2020", "state" : "delivered"}
];

console.log("Starting API server...");

var app = express();

app.get("/", (req, res) =>{
    res.send("<html><body><h1>My Server</h1></body></html>");
});

app.get(BASE_API_PATH + "/orders", (req,res) => {
    console.log(Date() + " - GET /orders");
    res.send(orders)
});

app.listen(port);

console.log("Server ready!");