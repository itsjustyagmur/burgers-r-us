var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});
router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var handleBurger = {
        burgers: data
    };
    console.log(handleBurger);
    res.render("index", handleBurger);
    });
});
router.post("/burgers", function(req, res) {
    burger.create(
        ["burger_name"], [req.body.burger_name], function() {
            res.redirect("/burgers");
        });
});

router.put("/burgers/:id", function(req, res) {
    
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
    {"devoured": req.body.devoured}, condition, function(data) {
            res.redirect("/burgers");
    });
});

module.exports = router;