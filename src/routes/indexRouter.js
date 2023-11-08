const express = require("express");

const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/index2", indexController.index2);

router.get("/logueado", (req, res) => {
    if (req.session.userLogged) {
      const nombreUsuario = req.session.userLogged.userType;
      res.send("El usuario logueado es " + nombreUsuario);
    } else {
      res.send("No estás logueado");
    }
  });


module.exports = router;