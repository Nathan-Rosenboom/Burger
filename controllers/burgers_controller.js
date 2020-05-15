const express = require("express");
const burgerQuery = require("../models/burger.js");
const app = express();

let routes = {
    getBurgers:
        app.get("/", function (req, res) {
            burgerQuery.all
            if (err) {
                return res.status(500).end();
            }
            if (result.length === 0) {
                return res.status(404).end();
            }
            res.render(result);
            res.status(200);
        }),

    // Update burger status
    devourBurger:
        app.put("/api/burger/:id", function (req, res) {
            burgerQuery.update
            if (err) {
                return res.status(500).end();
            }
            res.status(200);
        }),

    // Create a new burger
    newBurger:
        app.post("/api/burger", function (req, res) {
            burgerQuery.insert;
            if (err) {
                return res.status(500).end();
            }
            res.status(200);
        })
}
module.exports = routes;
