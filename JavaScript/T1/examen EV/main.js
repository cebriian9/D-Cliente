function validarUsuario() {
    let usuario = document.getElementById("username").value

    let patron = /^usuario$/

    let valido = false

    //validacion de la expresion regular
    if (patron.test(usuario)) {
        document.getElementById("error1").innerHTML = ""
        valido = true
    } else {
        document.getElementById("error1").innerHTML = "<p>el usuario no es correcto</p>"
    }
    return valido

}

function validarPass() {

    let pass1 = document.getElementById("pass1").value

    //quito los espacios de alrededor
    pass1 = pass1.trim()
    let valido = false
    let patron = /\w{6}/

    //validacion de la expresion regular
    if (patron.test(pass1)) {
        document.getElementById("error2").innerHTML = ""
        valido = true
    } else {
        document.getElementById("error2").innerHTML = "<p>la contraseña no es correcta, tiene que tener un largo de 6 caracteres y una mayuscula y un numero minimo</p>"

    }

    return valido

}

function validarPass2() {
    let pass1 = document.getElementById("pass1").value
    let pass2 = document.getElementById("pass2").value

    let valido = false

    //compruebo que son iguales
    if (pass2 == pass1) {
        valido = true
    } else {
        document.getElementById("error3").innerHTML = "<p>las contraseñas no coinciden</p>"
    }
    return valido
}


function validar() {

    //valido que todas las validaciones son correctas
    if (validarUsuario() && validarPass() && validarPass2()) {
        abrirVentana()
    } 

}

function abrirVentana() {
    let tope = document.getElementById("secion").value
    let cantidad = document.getElementById("cantidad").value

    //creo los array necesarios
    let numeros = Array()
    let numerosSeleccionados = Array()
    let numerosSeleccionadosImpares = Array()

    //relleno un array con los numeros del 1 a el tope seleccionado
    for (let index = 0; index < tope; index++) {
        numeros[index] = index+1;
        
    }

    //escojo n numeros aleatorios de ese array para los numeros seleccioandos
    for (let index = 0; index < cantidad; index++) {

        let num = Math.random() * tope
        num=parseInt(num)
        numerosSeleccionados.push(numeros[num])
    }

    //recojo los numeros impares de numeros seleccioandos
    for (let index = 0; index < numerosSeleccionados.length; index++) {
        if (numerosSeleccionados[index]%2!=0) {
            numerosSeleccionadosImpares.push(numerosSeleccionados[index])

        }
    }
    //ordenao el array de impares
    numerosSeleccionadosImpares.sort()

    //abro las ventanas
    abrirVentanaResultado(numeros, numerosSeleccionados)
    
    abrirVentanaResultado2(numerosSeleccionadosImpares)
}


function abrirVentanaResultado(numeros, numerosSeleccionados) {
    //abro la ventana
    let ventana=window.open(" ","resultado","width=1000 height=500")


    //escribo la ventana
    ventana.document.write("<h3>array total</h3>")
    ventana.document.write("<p>"+numeros.toString()+"</p>")
    ventana.document.write("<h3>array seleccionado</h3>")
    ventana.document.write("<p>"+numerosSeleccionados.toString()+"</p>")
    ventana.document.bgColor="yellow"

    
}

function abrirVentanaResultado2(numerosSeleccionadosImpares) {
    
    /*
    no funcina asi que lo muestro en console log

    let ventana2=window.open(" ","resultado2","width=1000 height=500")

    ventana2.document.write("<h3>array seleccionado</h3>")
    ventana2.document.write("<p>"+numerosSeleccionadosImpares.toString()+"</p>")
    */

    console.log(numerosSeleccionadosImpares.toString())
}
