const connection = require("./connection");

let orm = {
    // Select all from a specific table
    selectAll: function (tableInput) {
        var queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // Insert a new row into a specific table
    insertOne: function (tableInput, insertColumnOne, insertColumnTwo, insertName, insertStatus) {
        var queryString = `INSERT INTO ??  (??, ??) VALUES (?, ?)`;
        connection.query(queryString, [tableInput, insertColumnOne, insertColumnTwo, insertName, insertStatus], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // Update a single value of an item in a specific table
    updateOne: function (tableInput, setColumnOne, setValue, columnOne, valueOne) {
        var queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(queryString, [tableInput, setColumnOne, setValue, columnOne, valueOne], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;