function main() {
    

    let premio = 1000

    for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 1000);

        participantes[random] = premio

        premio += 1000;
    }
}

function ventana() {
    let ventana = window.open(" ", "resultado", "width=500 height=400")
    for (let index = 0; index < participantes.length; index++) {
        if (participantes[index] > 0) {
            
            ventana.document.write("participante numero: " + (index+1) + " con un premio de " + participantes[index] + "<br>");
        }

    }
}

function premios() {
    let premios = window.open(" ", "resultado", "width=500 height=400")
    let premio=1000
    for (let index = 0; index < 10; index++) {
        
            
            premios.document.write("premio numero: " + (index+1) + " es de-> " +premio+"<br>");
        
        premio+=1000
    }
}

const participantes = new Array(1000);
