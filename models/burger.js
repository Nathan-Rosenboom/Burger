const orm = require("../config/orm");

const burgerQuery = {
    // Select all rows in the burgers table
    all:
        orm.selectAll("burgers"),

    // Insert a new row into the burgers table
    insert:
        orm.insertOne("burgers", "burger_name", "devoured", "", "0"),

    // Update the devoured status of a specific burger
    update:
        orm.updateOne("burgers", "devoured", "1", "id", "id")
}

module.exports = burgerQuery;