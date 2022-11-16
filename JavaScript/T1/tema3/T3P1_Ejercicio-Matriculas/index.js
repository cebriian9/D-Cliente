function calcularA() {
    console.log("ejecutando a")
    nums = [0, 0, 0, 0]
    poker = 0 //poker
    ec = 0 //escalera completa
    es = 0 //escalera simple
    dp = 0 //doble pareja
    for (let i = 0; i < 10000; i++) {
        //mostrar array orignal
        let arrayStr = nums.toString()
        console.log("original "+arrayStr)

        



        if (nums[0] == nums[1] && nums[1] == nums[2]
            && nums[2] == nums[3] && nums[3] == nums[0]) {
            poker++;
        }



        nums = incrementar(nums)//incrementar *NO TOCAR*
    }

    console.log("numero de pokers " + poker)

    document.getElementById("poker").innerHTML = poker
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

