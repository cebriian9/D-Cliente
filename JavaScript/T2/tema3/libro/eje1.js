window.addEventListener("load", (event) => {

    let numero = Math.random()

    if (numero>1) {
        location.href ='https://google.com';
    }else{
        let today = new Date();
        let hora=today.getHours();

        if (hora<15) {
            document.getElementById('respuesta').innerHTML="buenos dias"
        }else{
            document.getElementById('respuesta').innerHTML="buenas tardes"
            
        }
    }

});