function main() {
    const vector = new Array(10);

    //relleno
    for (let index = 0; index < vector.length; index++) {
        let random=Math.floor(Math.random() * 10)+1;        

        vector[index]=random

    }

    console.log(vector);

    for (let index = 0; index < vector.length; index++) {
        if (vector[index]==2) {
            vector.splice(index,1,1)
        }        
    }

    console.log(vector);

}