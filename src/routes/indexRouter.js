const express = require("express");

const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/logueado", (req, res) => {
    if (req.session.userLogged) {
      const nombreUsuario = req.session.userLogged.nombre;
      res.send("El usuario logueado es " + nombreUsuario);
    } else {
      res.send("No estás logueado");
    }
  });


module.exports = router;