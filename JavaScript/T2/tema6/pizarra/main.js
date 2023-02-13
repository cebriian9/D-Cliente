

//espero a que se cargue el DOM para ejecutar la funcion de pintar
document.addEventListener("DOMContentLoaded", function () {

    //nodos----------------------------------------------------\
    //hago un nodo de todos los divs para luego recorrerlo
    const divs = document.querySelectorAll("#miDiv")

    //hago otro del boton para activar el pincel
    const btnActivado = document.getElementById("pincel")
    let pincel = true

    //boton de limpieza de pizarra
    const btnLimpiar = document.getElementById("limpiar")

    

    //nodos----------------------------------------------------/

    //PINCEL
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
    //recorro los "divs" escuchando cual clico 
    for (var i = 0; i < divs.length; i++) {

        divs[i].addEventListener("mouseover", function () {
            if (pincel) {
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









