function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = false;  //res.locals son variables que puedo compartir a traves de todas las vistas indist. del controlador
    
    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged  // paso lo que tengo en session a una varialbe local 

    }

    next();
}

module.exports = userLoggedMiddleware;