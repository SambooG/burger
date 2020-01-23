console.log(" I HAVE LOADED!");
$(function() {
    $('.devour-burger').on("click", function(event){
        const id = $(this).data("id");
    
        const devouredUpdate = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredUpdate
        }).then(
          function() {
            console.log("Is now devoured", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
    $('#burger-submit').on("click", function(event){
        console.log("I work!")
        var newBurger = {
            burger_name: $("#add-burger").val().trim(),
            devoured: false
        };
        $.post("/api/burgers/"+ newBurger, {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Added", newBurger);
            }
            );
            // location.reload();
            
            // After post is done, reload the page
        });
});
        