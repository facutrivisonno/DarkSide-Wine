const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require("multer");

const productController = require("../controllers/productController");

// En que lugar vamos a almacenar los archivos subidos y el nombre de los mismos

let storage = multer.diskStorage({
    destination:(req, file, callback) => {
        let folder = path.join(__dirname, "../../public/images");
        callback (null, folder);
    },
    filename: (req, file , callback) => {
        let imageName = "product-" + Date.now() + path.extname(file.originalname)
        callback (null, imageName)
    }
}) 

let fileUpload = multer({storage:storage})


// Middleware
const adminMiddleware = require("../middlewares/adminMiddleware")


router.get("/", productController.list);
router.get("/category/:id", productController.listCategory);
router.get("/cellar/:id", productController.listCellar);

router.get("/search", productController.search)

router.get("/create", adminMiddleware ,productController.createProduct);
router.post("/create", fileUpload.single("imageProduct") ,productController.processCreate);

router.get("/edit/:id", productController.editProduct);
router.put("/edit/:id",productController.update);

router.delete("/delete/:id",productController.delete);

router.get("/:id", productController.detail);







module.exports = router;