const connection = require("./connection");

let orm = {
    selectAll: function (tableInput) {
        var queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (tableInput, insertColumn1, insertColumn2, insertName, insertStatus) {
        var queryString = `INSERT INTO ??  (??, ??) VALUES (?, ?)`;
        connection.query(queryString, [tableInput, insertColumn1, insertColumn2, insertName, insertStatus], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;