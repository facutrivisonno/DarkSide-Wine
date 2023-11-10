const express = require("express");
const app = express();
const path = require("path");
const config = require("./config.js");
const PORT = config.PORT;

const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");


// Implementar los metodos PUT y DELETE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Configuracion para capturar los datos que se envian en los formularios (capturarlo en forma de ob. literal)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  secret: "Esto es secreto",
  resave: false, // Evita la advertencia sobre resave
  saveUninitialized: false, // Evita la advertencia sobre saveUninitialized
}));

app.use(userLoggedMiddleware);


// Importamos los distintos enrutadores
const indexRouter = require("./routes/indexRouter");
const productRouter = require('./routes/productRouter.js')
const userRouter = require('./routes/userRouter.js')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));



// Usando los enrutadores importados
app.use('/', indexRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);


app.listen(PORT, function(){
    console.log("Servidor corriendo en http://localhost:3019");
})