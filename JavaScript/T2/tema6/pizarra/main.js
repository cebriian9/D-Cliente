
//espero a que se cargue el DOM para ejecutar la funcion de pintar
document.addEventListener("DOMContentLoaded", function () {

    let divs = document.querySelectorAll("#miDiv");
    let toggleBtn = document.getElementById("toggleBtn");
    let enabled = true;
    
    toggleBtn.addEventListener("click", function () {
        enabled = !enabled;
    });

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function () {
            if (enabled) {
                let color=document.getElementById("color").value
                this.style.backgroundColor = color;
            }
        });
        
    }
});



