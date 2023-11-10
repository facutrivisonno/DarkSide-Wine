function guestMiddleware (req, res, next){
    if (req.session.userLogged){
        return res.redirect("/")  //en caso que quiere ingresar a login o register
    }
    next();
}

module.exports = guestMiddleware;