function authMiddleware (req, res, next){
    if (!req.session.userLogged){
        return res.redirect("/users/login")   //en caso que quiere ingresar a profile
    }
    next();
}

module.exports = authMiddleware;