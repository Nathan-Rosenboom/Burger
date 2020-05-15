const mysql = require("mysql");
// mysql connection parameters
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "RufusDog2019!",
    database: "burger_db"
});
// Initialise the connection to buergers_db
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;