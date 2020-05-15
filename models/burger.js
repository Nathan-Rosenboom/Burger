const orm = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured", "", "0");

orm.updateOne("burgers", "devoured", "1", "id", "id");

module.exports = burgerQuery;