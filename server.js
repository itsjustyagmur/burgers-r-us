var mysql = require("mysql");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
