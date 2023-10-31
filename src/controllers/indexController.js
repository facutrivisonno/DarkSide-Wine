const db = require("../database/models")

const indexController = {
    index: (req,res,next) => {
        
        db.Products.findAll()
        .then((products) => {
            res.render("home", {products})
        })
        
    }
}

module.exports = indexController;