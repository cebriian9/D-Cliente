const sueldos = new Array();

function añadir() {

    let sueldo=document.getElementById("sueldos").value
    sueldo=Number(sueldo)
    document.getElementById("sueldos").value=""

    sueldos.push(sueldo)

    sueldos.sort(function(a, b){return a - b});
}

function mostrar() {
    
    let muestraSueldos=sueldos.toString()
    document.getElementById("muestra").innerHTML=muestraSueldos
}