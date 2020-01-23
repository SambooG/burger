const orm = require('../config/orm');

const BurgerModel = {
    getBurgers: function(cb){
        orm.selectAll("burgers", cb);
    },

    updateBurgers: function(vals, condition, cb){
        orm.updateOne("burgers", vals, condition, cb);
    },
    addBurgers: function(vals, cb){
        orm.updateOne("burgers", vals, cb);
    },
};

module.exports = BurgerModel