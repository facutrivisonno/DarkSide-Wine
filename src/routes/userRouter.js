const express = require("express");

const router = express.Router();

const indexController = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")

// Validaciones del lado del servidor
const {body} = require("express-validator");

const validateRegister = [
    body("nombreUsuario")
        .notEmpty().withMessage("Debes completar el campo de nombre"),
    body("emailUsuario")
        .notEmpty().withMessage("Debes completar el campo email").bail()
        .isEmail().withMessage("Debes completar un email válido"),
    body("passwordUsuario")
        .notEmpty().withMessage('Ingrese su contraseña').bail()  // Esta función indica que si una validación falla, el proceso de validación debe detenerse y no se deben realizar más validaciones en el mismo campo
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).withMessage('Su contraseña debe tener al menos una letra mayúscula, una minúscula, un número y al menos 8 caracteres. No debe incluir un caracter especial.')
];


router.get("/register" , guestMiddleware ,indexController.register);
router.post("/register", validateRegister  ,indexController.processRegister);

router.get("/login", guestMiddleware, indexController.login);
router.post("/login", validateRegister ,indexController.processLogin);

router.get("/logout", indexController.logout);

module.exports = router;