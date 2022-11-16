function calcularA() {
    console.log("ejecutando a")
    let nums = [0, 0, 0, 0]
    let numsHelp //array auxiliar


    let poker = 0 //poker
    let ec = 0 //escalera completa
    let es = 0 //escalera simple
    let tr = 0 //trio
    let dp = 0 //doble pareja

    //-----------------porcentajes % 
    let PORpoker = 0 //poker 
    let PORec = 0 //escalera completa 
    let PORes = 0 //escalera simple 
    let PORtr = 0 //trio 
    let PORdp = 0 //doble pareja 
    //-----------------porcentajes %


    for (let i = 0; i < 10000; i++) {
        //mostrar array orignal
        //mostrarArray(nums)

        //ordenar el array manteniendo el array original intacto
        numsHelp = Array.from(nums)
        numsHelp = numsHelp.sort()


        //mostrar array ordenado
        //mostrarArray(numsHelp)


        //comporbar si es un poker
        if (nums[0] == nums[1] && nums[1] == nums[2]
            && nums[2] == nums[3] && nums[3] == nums[0]) {

            poker++
        }

        //escalera completa
        if ((numsHelp[0] + 1) == numsHelp[1] && (numsHelp[1] + 1) == numsHelp[2]
            && (numsHelp[2] + 1) == numsHelp[3]) {
            ec++

        }

        //escalera simple
        if ((numsHelp[0] + 1) == numsHelp[1] && (numsHelp[1] + 1) == numsHelp[2]) {
            es++

        } else if ((numsHelp[1] + 1) == numsHelp[2] && (numsHelp[2] + 1) == numsHelp[3]) {
            es++;

        }

        //trios
        if ((numsHelp[0]) == numsHelp[1] && (numsHelp[1]) == numsHelp[2]) {
            tr++

        } else if ((numsHelp[1]) == numsHelp[2] && (numsHelp[2]) == numsHelp[3]) {
            tr++;
        }

        //doble pareja
        if (numsHelp[0] == numsHelp[1] && numsHelp[2] == numsHelp[3]) {
            dp++;
        }



        nums = incrementar(nums)//incrementar *NO TOCAR*
    }

    document.getElementById("poker").innerHTML = poker
    document.getElementById("escaleraCompleta").innerHTML = ec
    document.getElementById("escaleraSimple").innerHTML = es
    document.getElementById("trio").innerHTML = tr
    document.getElementById("doblePareja").innerHTML = dp

    calcularPorcetajes(PORpoker, poker, PORec, ec, PORes, es, PORtr, tr, PORdp, dp)




}

function calcularPorcetajes/*y mostrar resultados*/(PORpoker, poker, PORec, ec, PORes, es, PORtr, tr, PORdp, dp) {

    PORpoker = poker * 100 / 10000
    PORec = ec * 100 / 10000
    PORes = es * 100 / 10000
    PORtr = tr * 100 / 10000
    PORdp = dp * 100 / 10000

    

}

function mostrarArray(arr) {
    let arrayStr = arr.toString()
    console.log("array " + arrayStr)

}

function incrementar(n) {
    n[3]++
    if (n[3] == 10) {
        n[3] = 0
        n[2]++
    } if (n[2] == 10) {
        n[2] = 0
        n[1]++
    } if (n[1] == 10) {
        n[1] = 0
        n[0]++
    }
    return n
}

