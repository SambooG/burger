const router = require("express").Router()
const BurgerModel = require("../models/burger");


router.get('/', function (req, res) {
    BurgerModel.getBurgers(function(data){
        const hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    })
    // res.send('hello world')
  })

  router.put('/api/burgers/:id', function (req, res) {
    console.log("ID: ", req.params.id);
    console.log("Data: ", req.body);
    const condition = "id = " + req.params.id;
    BurgerModel.updateBurgers({ devoured: true }, condition, function(data){
      res.send(data);
    });
  })

  router.post('/api/burgers', function (req, res) {
    const data = req.body; // { buger_name: 'mah burger', devoured: false }
    const values = [
      data.burger_name
    ];
    console.log("VALUES: ", values);
    BurgerModel.addBurgers(values, function(data){
      res.send(data); // res.status(200);
    })
    // res.send('Ember loves me');
  })

  // 4. Update burger-controller with logic for PUT (updating devoured state) and POST (adding new burger)
  // 1. For POST your data should look like { burger_name: ‘name here’, devoured: false


module.exports = router
