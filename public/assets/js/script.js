$(function () {
   
    $(".devourBurger").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newDevour")

        let updatedBurger = {
            devoured: newDevour
        };

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(
            function () {
                console.log("Devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});