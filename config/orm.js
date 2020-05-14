const connection = require("./connection");
let orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};
module.exports = orm;