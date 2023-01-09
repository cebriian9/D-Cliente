function main() {
    const numeros=new Array(10)
    
    for (let index = 0; index < numeros.length; index++) {
        let random=Math.floor(Math.random() * 500) + 1;
        numeros[index]=random
    }

    console.log(numeros);

    //separacion

    const menores = new Array();
    const mayores = new Array();

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]>=250) {
            mayores.push(numeros[index])
        }else{
            menores.push(numeros[index])
        }        
    }
    console.log("arrays");
    console.log(mayores);
    console.log(menores);
}