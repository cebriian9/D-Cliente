let nums = [0, 0, 0, 0]
let numsHelp //array auxiliar


let poker = 0 //poker
let ec = 0 //escalera completa
let es = 0 //escalera simple
let tr = 0 //trio
let dp = 0 //doble pareja

//-----------------porcentajes % 
let PORpoker = 0 //poker 
let PORec = 0 //escalera completa 
let PORes = 0 //escalera simple 
let PORtr = 0 //trio 
let PORdp = 0 //doble pareja 
//-----------------porcentajes %

function calcularA() {
    console.log("ejecutando a")

    let encontrado = false

    for (let i = 0; i < 10000; i++) {
        //mostrar array orignal
        //mostrarArray(nums)

        //ordenar el array manteniendo el array original intacto
        numsHelp = Array.from(nums)
        numsHelp = numsHelp.sort()


        //mostrar array ordenado
        //mostrarArray(numsHelp)


        //comporbar si es un poker
        if (encontrado == false && nums[0] == nums[1] && nums[1] == nums[2]
            && nums[2] == nums[3] && nums[3] == nums[0]) {

            poker++
            encontrado = true
        }

        //escalera completa
        if (encontrado == false && (numsHelp[0] + 1) == numsHelp[1] && (numsHelp[1] + 1) == numsHelp[2]
            && (numsHelp[2] + 1) == numsHelp[3]) {
            ec++
            encontrado = true
        }

        //escalera simple
        if (encontrado == false && (numsHelp[0] + 1) == numsHelp[1] && (numsHelp[1] + 1) == numsHelp[2]) {
            es++
            encontrado = true

        } else if (encontrado == false && (numsHelp[1] + 1) == numsHelp[2] && (numsHelp[2] + 1) == numsHelp[3]) {
            es++;
            encontrado = true

        }

        //trios
        if (encontrado == false && (numsHelp[0]) == numsHelp[1] && (numsHelp[1]) == numsHelp[2]) {
            tr++
            encontrado = true

        } else if (encontrado == false && (numsHelp[1]) == numsHelp[2] && (numsHelp[2]) == numsHelp[3]) {
            tr++;
            encontrado = true
        }

        //doble pareja
        if (encontrado == false && numsHelp[0] == numsHelp[1] && numsHelp[2] == numsHelp[3]) {
            dp++;
            encontrado = true
        }


        encontrado = false//resetear el encontrado
        nums = incrementar(nums)//incrementar *NO TOCAR*
    }

    //mostrar la cantidad de fuguras que aparecen en el main.html
    document.getElementById("poker").innerHTML = poker
    document.getElementById("escaleraCompleta").innerHTML = ec
    document.getElementById("escaleraSimple").innerHTML = es
    document.getElementById("trio").innerHTML = tr
    document.getElementById("doblePareja").innerHTML = dp

}


function calcularB(num) {

    let figura = "ninguna"
    let encontrado = false

    //ordenado el array
    numHelp = Array.from(num)
    numHelp = numHelp.sort()

    //comporbar si es un poker
    if (encontrado == false && num[0] == num[1] && num[1] == num[2]
        && num[2] == num[3] && num[3] == num[0]) {

        figura = "poker"
        encontrado = true
    }

    //escalera completa
    if (encontrado == false && (numHelp[0] + 1) == numHelp[1] && (numHelp[1] + 1) == numHelp[2]
        && (numHelp[2] + 1) == numHelp[3]) {
        figura = "escalera completa"
        encontrado = true

    }

    //escalera simple
    if (encontrado == false && (numHelp[0] + 1) == numHelp[1] && (numHelp[1] + 1) == numHelp[2]) {
        figura = "escalera simple"
        encontrado = true

    } else if (encontrado == false && (numHelp[1] + 1) == numHelp[2] && (numHelp[2] + 1) == numHelp[3]) {
        figura = "escalera simple"
        encontrado = true

    }

    //trios
    if (encontrado == false && (numHelp[0]) == numHelp[1] && (numHelp[1]) == numHelp[2]) {
        figura = "trio"
        encontrado = true

    } else if (encontrado == false && (numHelp[1]) == numHelp[2] && (numHelp[2]) == numHelp[3]) {
        figura = "trio"
        encontrado = true

    }

    //doble pareja
    if (encontrado == false && numHelp[0] == numHelp[1] && numHelp[2] == numHelp[3]) {
        figura = "doble pareja"
        encontrado = true

    }

    //mostrar la figura del numer odel usuario
    document.getElementById("resultadoB").innerHTML = figura
    //calculo de porcentajes y muestra de resultados
    calcularPorcetajes(poker, ec, es, tr, dp)

}

function calcularPorcetajes/*y mostrar resultados*/(poker, ec, es, tr, dp) {

    PORpoker = poker * 100 / 10000
    PORec = ec * 100 / 10000
    PORes = es * 100 / 10000
    PORtr = tr * 100 / 10000
    PORdp = dp * 100 / 10000

    //creacion de ventana emergente    
    popup(PORpoker, PORec, PORes, PORtr, PORdp)

}

function popup(PORpoker, PORec, PORes, PORtr, PORdp) {
    let ventana = window.open("", "ventana", "width=400,height=300,scrollbars=NO")

    //link al css para dar estilo
    ventana.document.write("<link rel='stylesheet' href='estilos.css'>")

    //---------apertura-de-etiquetas-------
    ventana.document.write("<div class='padre'>")
    ventana.document.write("<div class='ap'>")
    ventana.document.write("<h3>Porcentajes de aparicion:</h3>")
    ventana.document.write("<ul>")

    //--------muestra-de-los-porcentajes------
    ventana.document.write("<li>Doble pareja: " + PORdp + " %</li>")
    ventana.document.write("<li>Trio: " + PORtr + " %</li>")
    ventana.document.write("<li>Escalera simple (3): " + PORes + " %</li>")
    ventana.document.write("<li>Escalera completa (4): " + PORec + " %</li>")
    ventana.document.write("<li>Poker (4 iguales): " + PORpoker + " %</li>")

    //---------cierre-de-etiquetas-------
    ventana.document.write("</ul>")
    ventana.document.write("</div>")
    ventana.document.write("</div>")

    console.log("creacion y cerracion de la ventana")

    setTimeout(function () {cerrar(ventana);}, 10000);


}

function cerrar(ventana) {
    console.log("cerracion de la ventana")

    ventana.window.close()
}

function pedirNum() {
    //numero de usuario
    let nUsuario = document.getElementById("matricula").value

    // comproar si es un numero de 4 digitos
    if (nUsuario >= 0 && nUsuario != /[A-Z]/ && nUsuario.length == 4) {

        //paso el *string* del numero a int y a un array
        let num = Array.from(nUsuario)
        num = pasarArrInt(num)

        calcularB(num)

    } else {
        alert("Solo numero positivos de 4 digitos");
    }
}

function pasarArrInt(num) {//convertir array de carcteres a numeros enteros
    for (let index = 0; index < num.length; index++) {
        num[index] = parseInt(num[index])
    }
    return num
}

function mostrarArray(arr) {
    let arrayStr = arr.toString()
    console.log("array " + arrayStr)

}

function incrementar(n) {
    //incrementa el array del apratado A del 0000 al 9999
    n[3]++
    if (n[3] == 10) {
        n[3] = 0
        n[2]++
    } if (n[2] == 10) {
        n[2] = 0
        n[1]++
    } if (n[1] == 10) {
        n[1] = 0
        n[0]++
    }
    return n
}

