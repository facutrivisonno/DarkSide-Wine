module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        usertype: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName : "users",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    return Product
}