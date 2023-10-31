const db = require("../database/models")

const {validationResult} = require("express-validator")

const bcrypt = require('bcryptjs');

const userController = {
    register: (req,res) =>{
        res.render("users/register")
    },

    processRegister: (req,res) =>{
        
        db.Users.findAll()
        .then(users =>{
            for (let i = 0; i < users.length; i++) {
                console.log(users[i].email);
                
                if(users[i].email === req.body.emailUsuario){
                    return res.render("users/register", {msgErrors: [
                        {msg: "Ya existe usuario con ese email"}
                    ]})
                }     
            }
        })
    
 
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            newUser = {
                nombre: req.body.nombreUsuario,
                email: req.body.emailUsuario,
                usertype: req.body.categoria,
                contraseña: bcrypt.hashSync(req.body.passwordUsuario,10)
            }
    
            db.Users.create(newUser)
                .then(result => {
                return res.redirect("/users/login")
            })
            
        } else {
            return res.render("users/register", {msgErrors: errors.mapped()})
        } 

        
    }, 

    login: (req,res) =>{
        
        res.render("users/login")
        
    },

    processLogin: (req,res) =>{

        db.Users.findAll()
            .then((users) => {
                let authUser

                for (let i = 0; i < users.length; i++) {
                   
                    if(users[i].email == req.body.emailUsuario){
                        if (bcrypt.compareSync(req.body.passwordUsuario, users[i].contraseña)) {
                            authUser = users[i];                     
                        }
                    }  
                }
                
                if(authUser){
                    delete authUser.password //elimina la propiedad password
                    req.session.userLogged = authUser
                    res.redirect("/logueado");
                    
                } else {
                    return res.render("users/login", {msgErrors: [{msg: "Credenciales invalidas"}]})
                }
             
                
            })

        },

        logout : (req,res) =>{
            req.session.destroy();
            res.redirect("/");
        }
 
    }
    
module.exports = userController;        


           /*  users.forEach(user => {
                if (user.email === req.body.emailUsuario){
                    if (bcrypt.compareSync(req.body.passwordUsuario, user.contraseña) ){
                        authUser = user;
                        
                    }
                }
            })
        
            if (authUser === undefined){
                return res.render("users/login", {msgErrors: [
                    {msg: "Credenciales invalidas"}
                ]})
            } 

            console.log(authUser)
 */





  