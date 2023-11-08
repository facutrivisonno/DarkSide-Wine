module.exports = (sequelize, dataTypes) => {
    let alias = "Cellars";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        logo: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName : "cellars",
        timestamps: false
    }

    const Cellar = sequelize.define(alias, cols, config)

     Cellar.associate = function(models){
        Cellar.hasMany(models.Products,{
            as: "Products",
            foreignKey: "id_cellars"
        })
    } 

    return Cellar
}