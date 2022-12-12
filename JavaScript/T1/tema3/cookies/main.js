
function galleta() {
    if (!document.cookie.replace(/(?:(?:^|.*;\s*)nombre\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
        document.cookie ="nombre=juan; expires=Fri, 31 Dec 9999 23:59:59 GMT"
        console.log("hola")
    }

    document.getElementById("intentos").innerHTML = document.cookie.replace(/(?:(?:^|.*;\s*)nombre\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    

}

function cambio() {
    
    let nombre=document.getElementById("nombre").value

    document.cookie="nombre="+nombre+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"

    document.getElementById("intentos").innerHTML = document.cookie.replace(/(?:(?:^|.*;\s*)nombre\s*\=\s*([^;]*).*$)|^.*$/, "$1")

}