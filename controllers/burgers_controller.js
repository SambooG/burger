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




module.exports = router