const adminMiddleware = (req, res, next) => {
    if(req.session.userLogged != undefined && req.session.userLogged.userType == 1) {
      next();
    } else {
      res.send('No tiene los permisos para ingresar a este sitio');
    }
  };
  
  module.exports = adminMiddleware;