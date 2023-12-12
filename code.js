const { check } = require("jsverify")


function permutationSort(a) {
    right = false
    if(a.length <= 1){
        return [0, a]
    }
    arr = option(a, [])
    return [0, arr]
}

function order(abb){
    for(i = 0; i < abb.length-1; i++){
        if(abb[i] > abb[i+1]){
            return false
        }
    }
    return true
}

function option(arr3, guess){
    arr3.forEach((num, index) => {
        if(right == false){
            guess.push(num)
            option(arr3.slice(0, index).concat(arr3.slice(index+1)), guess)
            if(right == false){
                guess.pop()
            }
        }
    });
    if(arr3.length == 0){
        if(order(guess) == true){
            right = true
            return guess
        }
    }
    return guess
}