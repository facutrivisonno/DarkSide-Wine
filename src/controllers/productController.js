const { Op } = require("sequelize");
const db = require("../database/models");

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
    
    listCellar:(req,res) => {
        const cellarId = req.params.id
        
        db.Products.findAll({
            where:{
                id_cellars: cellarId
            }
        })
            .then((products) => {
                res.render("./products/productsCellar", {products})
            })
    },


    search: (req,res,next) => {
        
        db.Products.findAll({
            where:{
                nombre: {
                    [Op.like]: "%" + req.query.search + "%"
                }
            }
        })
        .then((products) => {
            console.log(products)
            res.render("./products/searchProducts", {products})
        })
        
    },

    detail: (req,res) => {
        db.Products.findByPk(req.params.id)
            .then((product) => {
                res.render("./products/detail", {product})
            })
    },

    createProduct: (req,res) => {
      
        let promiseCategory = db.Categories.findAll()
        
        let promiseCellar = db.Cellars.findAll()

        Promise.all([promiseCategory,promiseCellar])
            .then(([categories, cellars]) => {
                res.render("./products/createProduct", { categories, cellars });
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
            res.render("./products/editProduct", {product}); 
        }) 
    },

    update: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(originalProduct => {
                if (!originalProduct) {
                    return res.status(404).send("Product not found");
                }
    
                const {cellarProduct, imageProduct} = originalProduct;
    
                let dest = 0;
                let of = 0;
    
                if (req.body.especialProduct != 0 && req.body.especialProduct == 1) {
                    dest = 1;
                } else {
                    of = 1;
                }
    
                const updateFields = {
                    nombre: req.body.nameProduct,
                    descripcion: req.body.descriptionProduct,
                    precio: req.body.priceProduct,
                    cellarProduct: cellarProduct,
                    imageProduct: imageProduct,
                    destacado: dest,
                    oferta: of,
                };
    
                console.log(req.body)

                // Realiza la actualización y devuelve la promesa resultante
                return db.Products.update(updateFields, {
                    where: {
                        id: req.params.id,
                    },
                });
            })
                .then(() => {
                // Después de que la actualización se haya completado, realiza la redirección
                    res.redirect("/products");
                    })
                    .catch(error => {
                        console.error("Error updating product:", error);
                        res.status(500).send("Error updating product");
                    });
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