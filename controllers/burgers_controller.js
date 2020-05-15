const express = require("express");
const model = require("../models/burger.js");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    model.all
    if (err) {
        return res.status(500).end();
    }
    if (result.length === 0) {
        return res.status(404).end();
    }
    res.render(result);
    res.status(200);
});

// Update burger status
app.put("/api/burger/:id", function (req, res) {
    model.update
    if (err) {
        return res.status(500).end();
    }
    res.status(200);
});

// Create a new burger
app.post("/api/burger", function (req, res) {
    model.insert;
    if (err) {
        return res.status(500).end();
    }
    res.status(200);
});

// Start the server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});