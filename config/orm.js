const connection = require("./connection");

let orm = {
    selectAll: function (tableInput) {
        var queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (tableInput, insertColumnOne, insertColumnTwo, insertName, insertStatus) {
        var queryString = `INSERT INTO ??  (??, ??) VALUES (?, ?)`;
        connection.query(queryString, [tableInput, insertColumnOne, insertColumnTwo, insertName, insertStatus], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (tableInput, setColumnOne, setValue, columnOne, valueOne) {
        var queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(queryString, [tableInput, setColumnOne, setValue, columnOne, valueOne], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;