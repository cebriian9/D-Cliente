
//---cookies---

//creo la cookie y digo que es un numero
function crearCookie() {
    Number(document.cookie)
    document.getElementById("nIntentos").innerHTML = document.cookie
}

function mostrarCookies() {

    //a cada intento la incremento y la muestro
    document.cookie++
    document.getElementById("nIntentos").innerHTML = document.cookie
}

//---/fin-cookies--

function pregunta(){
    if (confirm('¿Estas seguro de enviar este formulario?')){
       document.formulario.submit()
    }
}

//true=hay un error
//false=no hay errores 

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
            valido = validarEmail(contenido)
            console.log("email: " + valido)
            break;

        case 'telefono':
            valido = validarTel(contenido)
            console.log("telefono: " + valido)
            break;

        default:
            break;
    }

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

//expresion para validar que el email es correcto
function validarEmail(email) {
    let valido = false
    let patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (!patronEmail.test(email)) {
        valido = true
    }
    return valido
}


function validarTel(tel) {
    let valido = false
    //primero compruevo que los primeros numeros sean 6,7,9 y despues que lo sigiente sean 8 numeros
    let patronTel = /^[6,7,9][0-9]{8}$/
    if (!patronTel.test(tel)) {
        valido = true
    }
    return valido
}

//-----------/validar-datos-----------------------



//--------------recoger-datos----------------

//recoje nombre y apellido y lo pone en mayusculas
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

function getEmail(lugar) {
    let email = document.getElementById(lugar).value
    mostrarError(lugar, email)
}

function getProvincia(lugar) {

    //busque esto en internet pero no me llega a funcionar
    let idProvincia = document.getElementById(lugar).value
    let selected = idProvincia.options[idProvincia.selectedIndex].text;

    //console.log(provincia.text)
    //mostrarError(lugar, provincia)
}

//no lo compruebo ya que con el tipo de input ya dejo que el usuario seleccione la fecha sin necesidad de comprobarla y no doy pie a errores
function getFecha(lugar) {
    let fecha = document.getElementById(lugar).value
    console.log(fecha)

}

function getTel(lugar) {
    let tel = document.getElementById(lugar).value
    mostrarError(lugar, tel)
}

//no lo compruebo ya que con el tipo de input ya dejo que el usuario seleccione la hora sin necesidad de comprobarla y no doy pie a errores
function getHora(lugar) {
    let hora = document.getElementById(lugar).value
    console.log(hora)

}


