$(function () {

    $(".devourBurger").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newDevour")

        let updatedBurger = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(
            function () {
                console.log("Devoured burger");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new Burger");
                location.reload();
            }
        );
    });
});