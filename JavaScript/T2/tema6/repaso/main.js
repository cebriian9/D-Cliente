//esperar a que el dom cargue
document.addEventListener("DOMContentLoaded", function () {

    //expresiones:
    let ExpContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}/
    let ExpUsuario = /^[a-zA-Z0-9_]{4,20}$/


    //nodos--------------------------------

    let usuario = document.getElementById("usuario")

    let pass1 = document.getElementById("pass1")

    let pass2 = document.getElementById("pass2")

    let boton = document.getElementById("crearUsuario")



    //nodos--------------------------------

    function comprobarUsuario() {
        console.log("Comprobar usuario");
        let input = document.getElementById("usuario").value
        input.trim()

        if (ExpUsuario.test(input)) {
            document.getElementById("errorUsuario").innerHTML = ""
            return true;

        } else {
            document.getElementById("errorUsuario").innerHTML = "El usuario no es correcto"
        }


    }

    function comprobarContraseña() {
        console.log("Comprobar contraseña");
        let input = document.getElementById("pass1").value
        input.trim()

        if (ExpContraseña.test(input)) {
            document.getElementById("errorPass1").innerHTML = ""

            if (confirmarContraseña(input)) {
                document.getElementById("errorPass2").innerHTML = ""

                return true;
            } else {
                document.getElementById("errorPass2").innerHTML = "Las contraseñas no coinciden"
            }

        } else {
            document.getElementById("errorPass1").innerHTML = "La contraseña no es correcto"
        }
    }

    function confirmarContraseña(contraseña) {
        console.log("confirmar");
        let input = document.getElementById("pass2").value
        input.trim()

        if (input == contraseña) {
            return true
        }

    }

    boton.addEventListener("click", function () {



        if (comprobarUsuario() && comprobarContraseña()) {
            console.log("creando usuario....");
            let nombre = document.getElementById("usuario").value
            let contraseña = document.getElementById("pass1").value
            let superUsuario = false
            if (document.getElementById("checkSuper").checked) {
                console.log("chekado");
                superUsuario = true
            }

            const usuario = {
                usuario: nombre,
                contraseña: contraseña,
                superUsuario: superUsuario
            }

            console.log(usuario);

            crearTabla(usuario)
        }
    })




    function crearTabla(usuario) {
        let tabla = document.getElementById("tabla")
        if (usuario.superUsuario) {


            

            tabla.classList.replace("invisible","visible")

            let tr = document.createElement("tr")

            let td1 = document.createElement("td")
            td1.appendChild(document.createTextNode(usuario.usuario))
            tr.appendChild(td1)

            let td2 = document.createElement("td")
            td2.appendChild(document.createTextNode(usuario.contraseña))
            tr.appendChild(td2)

            let td3 = document.createElement("td")
            td3.appendChild(document.createTextNode(usuario.superUsuario))
            tr.appendChild(td3)

            tabla.appendChild(tr)
        }else{
            tabla.classList.replace("visible","invisible")
        }




    }



})