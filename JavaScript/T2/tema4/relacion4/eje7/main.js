function main() {
    const vector = new Array(10);

    //relleno
    for (let index = 0; index < vector.length; index++) {
        let random=Math.floor(Math.random() * 1000);        

        vector[index]=random

    }

    //veo cual es la posicon del elemento menor del array
    let posicion=vector.indexOf(Math.min.apply(Math, vector))

    //creo un nuevo vector y lo copio desde esa posicion
    const vector2 = new Array();

    vector2=vector.slice(posicion,vector.length-1)

    console.log(vector);
    console.log(vector2);

}