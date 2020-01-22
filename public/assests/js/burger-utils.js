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

    $('#burger_submit').on("click", function(event){
        var newBurger = {
            burger_name: $("#add_burger").val().trim(),
        }
        
        // POST to /api/burgers/
        $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("burger");

      row.append("<p>" + burgerModel.newBurger + "</p>");
      row.append("<p>" + burgerModel.body + "</p>");
      

      $("#id").prepend(row);
    });
    location.reload();
  
    
    // After post is done, reload the page
    })
});