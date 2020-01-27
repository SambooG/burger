console.log(" I HAVE LOADED!");
$(function() {
    $('.devour-burger').on("click", function(event){
      event.preventDefault();
        const id = $(this).data("id");
    
        // const devouredUpdate = {
        //   devoured: true
        // };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          // data: devouredUpdate
        }).then(
          function() {
            console.log("Is now devoured");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    $('#burger-submit').on("click", function(event){
      event.preventDefault(); // prevent default form submission action

      console.log("I work!")
      var newBurger = {
          burger_name: $("#add-burger").val().trim(),
      };

      $.post("/api/burgers/", newBurger).done(function(data) {
        console.log("I SUCCESSFULLY POSTED: ", data);
        location.reload();
      });
    });
});
// app.post("/api/todos", function(req, res) {
  // orm.addTodo(req.body, function(results) {
    // res.json(results);
  // });
// });