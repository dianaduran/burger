$(function() {
    $(".change-devoured").on("click", function(event) {
        console.log("work");
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var name = $("#bu").val().trim();

        // var newBurger = {
        //     burger_name: $("#bu").val().trim()
        // };


        // Send the POST request.
        $.ajax("/api/burger/" + name, {
            type: "POST",
            data: {
                burger_name: name
            }
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#clear").on('click', function(event) {
        event.preventDefault();
        $(".bur-dev").empty();

        // Send the DELETE request.
        $.ajax("/api/burger/", {
            type: "DELETE"
        }).then(
            function() {
                // console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

});