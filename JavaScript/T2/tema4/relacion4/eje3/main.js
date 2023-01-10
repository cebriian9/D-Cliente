function main() {
    const vector = new Array(5);

    //relleno
    for (let index = 0; index < vector.length; index++) {
        let random=Math.floor(Math.random() * 1000)+1;        

        vector[index]=random

    }

    let ultimo=vector[vector.length-1]
    let penUltimo=vector[vector.length-2]
    console.log("antes "+vector);

    ultimo+=penUltimo

    for (let index = 0; index < 2; index++) {
        vector.pop()
    }
    
    console.log("suma de los ultimos: "+ultimo);
    console.log("despues "+vector);
}