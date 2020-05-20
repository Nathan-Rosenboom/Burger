
const orm = require("../config/orm.js");

let burgerQuery = {
    // Select all rows in the burgers table
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // Insert a new row into the burgers table
    create: function (columns, values, cb) {
        orm.create("burgers", columns, values, function (res) {
            cb(res);
        });
    },
    // Update the devoured status of a specific burger
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burgerQuery;