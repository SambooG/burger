const router = require("express").Router()
const BurgerModel = require("../models/burger");


router.get('/', function (req, res) {
    BurgerModel.getBurgers(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
    // res.send('hello world')
  })

  router.put('/api/burgers/:id', function (req, res) {
    console.log("ID: ", req.params.id);
    console.log("Data: ", req.body);
    // BurgerModel.updateBurgers();
    // res.send('Success');

  })

  router.put('/api/burgers', function (req, res) {
    (burgerModel.newBurger)(function(data){
      const newData = {
          burgers: newBurger,
          devoured:false
        };
        res.render(newData)
  })

  // 4. Update burger-controller with logic for PUT (updating devoured state) and POST (adding new burger)
  // 1. For POST your data should look like { burger_name: ‘name here’, devoured: false


module.exports = router