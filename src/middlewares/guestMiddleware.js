function guestMiddleware (req, res, next){
    if (req.session.userLogged){
        return res.redirect("/users/profile")  //en caso que quiere ingresar a login o register
    }
    next();
}

module.exports = guestMiddleware;