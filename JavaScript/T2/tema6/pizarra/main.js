

//espero a que se cargue el DOM para ejecutar la funcion de pintar
document.addEventListener("DOMContentLoaded", function () {

    //nodos----------------------------------------------------\
    //hago un nodo de todos los divs para luego recorrerlo
    const divs = document.querySelectorAll("#miDiv")

    //nodo de la pizarra entera
    const zonaDibujo = document.getElementById("pizarra")
    

    //hago otro del boton para activar el pincel
    const btnActivado = document.getElementById("pincel")
    

    //boton de limpieza de pizarra
    const btnLimpiar = document.getElementById("limpiar")



    //nodos----------------------------------------------------/

    //PINCEL
    let pincel = true
    //funcion para activado y desactivado del pincel
    btnActivado.addEventListener("click", function () {
        pincel = !pincel
        if (!pincel) {
            btnActivado.innerHTML = "Activar Pincel"
            btnActivado.setAttribute("class", "btn btn-info")
        } else {
            btnActivado.innerHTML = "Desactivar Pincel"
            btnActivado.setAttribute("class", "btn btn-danger")
        }
    })

    //PINTAR
    let pizarra = false
    //evento que caundo pulsa y mantiene la pizarra se activa
    zonaDibujo.addEventListener("mouseup", function () {
        pizarra=!pizarra
    })
    //y caundo suelta la pizarra se desactiva
    zonaDibujo.addEventListener("mousedown", function () {
        pizarra=!pizarra
    })

    //recorro los "divs" añadiendole el evento mouseover a cada uno de ellos
    for (var i = 0; i < divs.length; i++) {

        divs[i].addEventListener("mouseover", function () {
            if (pincel && pizarra) {
                //saco el color selcecioando en el input y lo aplico
                let color = document.getElementById("color").value
                this.style.backgroundColor = color
            }
        })

    }
    



    //lIMPIEZA
    //limpieza de pizarra
    btnLimpiar.addEventListener("click", function () {
        console.log("limpiezaa");
        let divs = document.querySelectorAll("#miDiv");
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = ""
        }
    });
})









