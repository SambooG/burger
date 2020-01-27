const orm = require('../config/orm');

const BurgerModel = {
    getBurgers: function(cb){
        orm.selectAll("burgers", cb);
    },

    updateBurgers: function(vals, condition, cb){
        orm.updateOne("burgers", vals, condition, cb);
    },
    addBurgers: function(vals, cb){
        const columns = ["burger_name"];
        orm.insertOne("burgers", columns, vals, cb);
    },
};

module.exports = BurgerModel