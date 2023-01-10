function main() {
    const participantes = new Array(1000);

    let premio =1000

    for (let index = 0; index < 10; index++) {
        let random=Math.floor(Math.random() * 1000);
        
        participantes[random]=premio

        premio+=1000;
    }

    for (let index = 0; index < participantes.length; index++) {
        if (participantes[index]>0) {
            console.log("participante numero: "+index+" con un premio de "+participantes[index]);
        }        
    }
}