module.exports = (sequelize, dataTypes) => {
    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        destacado: {
            type: dataTypes.BOOLEAN
        },
        oferta: {
            type: dataTypes.BOOLEAN
        },
        imagen: {
            type: dataTypes.STRING
        },
        id_category: {
            type: dataTypes.INTEGER
        },
        id_cellars: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName : "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

     Product.associate = function(models){
        Product.belongsTo(models.Categories, {
            as: "Category",
            foreignKey: "id_category"
        }) 

        Product.belongsTo(models.Cellars, {
            as: "Cellar",
            foreignKey: "id_cellars"
        }) 

    }

    return Product
}