const db = require("../database/models")

const indexController = {
    index: (req,res,next) => {
        
        const promises = [
            db.Cellars.findAll(),
            db.Products.findAll({
                where: { Oferta: 1 } // Suponiendo que tienes un campo "enOferta" en tu modelo de Products
            }),
            db.Products.findAll({
                where: { destacado: 1 } // Suponiendo que tienes un campo "enOferta" en tu modelo de Products
            })
        ];


        Promise.all(promises) //esta promesa se resuelve cuando todas las promesas del array se resolvieron
        .then(([cellars, productsEnOferta, productosDestacados]) => {
            res.render("otraHome", { cellars, productsEnOferta, productosDestacados });
        })
        .catch((error) => {
            console.error(error);
            // Puedes redirigir o mostrar una página de error en caso de error.
            res.status(500).send("Error en la consulta a la base de datos");
        });    
    },

    index2: (req,res,next) => {
        
        db.Products.findAll()
        .then((products) => {
            res.render("otraHome", {products})
        })
        
    }
}

module.exports = indexController;