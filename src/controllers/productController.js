const db = require("../database/models")

const productController = {
    list: (req,res,next) => {
        
        db.Products.findAll()
        .then((products) => {
            res.render("./products/allProducts", {products})
        })
        
    },
    
    listCategory:(req,res) => {
        const categoryId = req.params.id
        
        db.Products.findAll({
            where:{
                id_category: categoryId
            }
        })
            .then((products) => {
                res.render("./products/productsCategory", {products})
            })
    },

    detail: (req,res) => {
        db.Products.findByPk(req.params.id)
            .then((product) => {
                res.render("./products/detail", {product})
            })
    },

    createProduct: (req,res) => {
      
        db.Categories.findAll()
            .then(categories => {
            console.log(categories);
            res.render("./products/createProduct", {categories}); 
        }) 
    },

    processCreate: (req,res) => {
        let dest = 0
        let of = 0
        
        if (req.body.especialProduct != 0 && req.body.especialProduct == 1) {
            dest = 1
        } else {
            of =1
        }
        
        let newProduct = {
            nombre : req.body.nameProduct,
            descripcion: req.body.descriptionProduct,
            precio: req.body.priceProduct,
            destacado: dest,
            oferta: of,
            id_category: req.body.categoryProduct,
            imagen: req.file ? req.file.filename : null
        }
        
        db.Products.create(newProduct)

        res.redirect ("/products")
    },
    
    editProduct: (req,res) => {
        
        db.Products.findByPk(req.params.id)
            .then(product => {
            console.log(product);
            res.render("./products/editProduct", {product}); 
        }) 
    },

    update: (req,res) =>{
        let dest = 0
        let of = 0
        
        if (req.body.especialProduct != 0 && req.body.especialProduct == 1) {
            dest = 1
        } else {
            of = 1
        }
        
        db.Products.update({
            nombre : req.body.nameProduct,
            descripcion: req.body.descriptionProduct,
            precio: req.body.priceProduct,
            destacado: dest,
            oferta: of
        },  {
                where:{
                    id: req.params.id
                }
        })
        
        res.redirect("/products")
    },

    delete: (req,res) =>{
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products");
    }

}

module.exports = productController;