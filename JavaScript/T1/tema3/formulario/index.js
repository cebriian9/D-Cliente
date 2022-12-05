
//muestra los errores
function mostrarError(lugar, contenido) {
    let valido = false
    switch (lugar) {

        case 'nombre':
        case 'apellido':
            valido = validarTexto(contenido)
            console.log("nom/ape: " + valido)
            break;

        case 'edad':
            valido = !validarEdad(contenido)
            console.log("edad: " + valido)
            break;

        case 'dni':
            valido = validarDNI(contenido)
            console.log("dni: " + valido)
            break;
        case 'email':
            valido = validarDNI(contenido) //hacer esta funcion y eso
            console.log("dni: " + valido)
            break;

        default:
            break;
    }

    console.log(valido)


    if (valido) {
        console.log("*ERROR*")
        document.getElementById("error").innerHTML = "<p id='error'> Error en " + lugar + "</p>"
        document.getElementById(lugar).focus()
    } else {
        document.getElementById("error").innerHTML = "<p id='error'></p>"

    }
}

//-----------validar-datos-----------------------

//valida que el texto(nombre apellido) solo tengan letras
function validarTexto(contenido) {

    valido = false

    let patron = /^[A-Z]+$/;
    if (!patron.test(contenido)) {
        valido = true
    }
    return valido
}



//valida que el rango de edad es correcto
function validarEdad(edad) {

    let valido = false
    if (edad > 0 && edad < 105) {
        valido = true;

    }

    return valido

}

//expresion regilar par ael DNI
function validarDNI(dni) {
    let valido = false

    //valida que hay 8 primeros numeros y al final un " - " y una letra
    let patronDNI = /^[0-9]{8}-[A-Z]+$/i

    if (!patronDNI.test(dni)) {
        valido = true
    }

    return valido
}
//-----------/validar-datos-----------------------



//--------------recoger-datos----------------

//recoje nombre y apellido y lo pone en mayus
function mayusculas(lugar) {
    let texto = document.getElementById(lugar).value
    texto = texto.toUpperCase()
    document.getElementById(lugar).value = texto

    mostrarError(lugar, texto)

}

function getEdad(lugar) {
    let edad = document.getElementById(lugar).value
    mostrarError(lugar, edad)
}

function getDNI(lugar) {
    let dni = document.getElementById(lugar).value
    mostrarError(lugar, dni)
}





