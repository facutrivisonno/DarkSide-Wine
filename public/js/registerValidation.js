window.addEventListener("load", function() {
    
    let formulario = document.querySelector(".form-register"); //captura el formulario de registracion
    let inputs = document.querySelectorAll("#formulario input");  //captura todos los inputs del formulario


    const expresiones = {
        nombreUsuario: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        emailUsuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        passwordUsuario: /^(?=.*[A-Z])(?=.*\d).{8,}$/
    }

    const campos = {
        nombreUsuario: false,
        emailUsuario: false,
        passwordUsuario: false
    }


    /*  Codigo para validar un campo en particular (lo reemplazo por una funcion generica para todos los campos, para reutilziar codigo)
    
    if (expresiones.nombreUsuario.test(e.target.value)){
        document.getElementById("element-nombre").classList.remove("element-form-incorrecto");
        document.getElementById("element-nombre").classList.add("element-form-correcto");
        document.querySelector("#element-nombre i").classList.remove("fa-times-circle");
        document.querySelector("#element-nombre i").classList.add("fa-check-circle");
        document.querySelector("#element-nombre .element-error").classList.remove("element-error-activo")
    } else {
    document.getElementById("element-nombre").classList.add("element-form-incorrecto");
    document.getElementById("element-nombre").classList.remove("element-form-correcto");
    document.querySelector("#element-nombre i").classList.remove("fa-check-circle")
    document.querySelector("#element-nombre i").classList.add("fa-times-circle")
    document.querySelector("#element-nombre .element-error").classList.add("element-error-activo")
    } */



    const validarFormulario = ((e) => {
        switch(e.target.name) {
            case "nombreUsuario":
                validarCampo(expresiones.nombreUsuario, e.target , "nombreUsuario")
            break;
            case "emailUsuario":
                validarCampo(expresiones.emailUsuario, e.target , "emailUsuario")
            break;
            case "passwordUsuario":
                validarCampo(expresiones.passwordUsuario, e.target , "passwordUsuario")
                validarPassword2();
            break;
            case "passwordUsuario2":
                validarPassword2();
            break;
        }
    })

    const  validarCampo = (expresion, input , campo) =>{
        const inputPassword1 = document.getElementById('passwordUsuario');
	    const inputPassword2 = document.getElementById('passwordUsuario2');
        
        if (expresion.test(input.value)){
            document.getElementById(`element-${campo}`).classList.remove("element-form-incorrecto");
            document.getElementById(`element-${campo}`).classList.add("element-form-correcto");
            document.querySelector(`#element-${campo} i`).classList.remove("fa-times-circle");
            document.querySelector(`#element-${campo} i`).classList.add("fa-check-circle");
            document.querySelector(`#element-${campo} .element-error`).classList.remove("element-error-activo");
            campos[campo] = true;
        } else {
            document.getElementById(`element-${campo}`).classList.add("element-form-incorrecto");
            document.getElementById(`element-${campo}`).classList.remove("element-form-correcto");
            document.querySelector(`#element-${campo} i`).classList.remove("fa-check-circle")
            document.querySelector(`#element-${campo} i`).classList.add("fa-times-circle")
            document.querySelector(`#element-${campo} .element-error`).classList.add("element-error-activo")
            campos[campo] = false;
        }
    }

    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('passwordUsuario');
        const inputPassword2 = document.getElementById('passwordUsuario2');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`element-passwordUsuario2`).classList.add('element-form-incorrecto');
            document.getElementById(`element-passwordUsuario2`).classList.remove('element-form-correcto');
            document.querySelector(`#element-passwordUsuario2 i`).classList.add('fa-times-circle');
            document.querySelector(`#element-passwordUsuario2 i`).classList.remove('fa-check-circle');
            document.querySelector(`#element-passwordUsuario2 .element-error`).classList.add('element-error-activo');
            campos["password"] = false;
        } else {
            document.getElementById(`element-passwordUsuario2`).classList.remove('element-form-incorrecto');
            document.getElementById(`element-passwordUsuario2`).classList.add('element-form-correcto');
            document.querySelector(`#element-passwordUsuario2 i`).classList.remove('fa-times-circle');
            document.querySelector(`#element-passwordUsuario2 i`).classList.add('fa-check-circle');
            document.querySelector(`#element-passwordUsuario2 .element-error`).classList.remove('element-error-activo');
            campos["password"] = true;
        }
    }


    inputs.forEach((input) =>{
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);

    })


    formulario.addEventListener("submit", function(e){
        
        if (!(campos.nombreUsuario && campos.emailUsuario &&  campos.passwordUsuario )) {
            e.preventDefault();
            document.getElementById('formulario__mensaje').classList.add('element-error-activo');
        } 
    })



})