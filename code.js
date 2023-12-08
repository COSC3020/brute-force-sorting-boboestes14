function permutationSort(a) {
    attempts = {}
    sorted = false
    while(sorted == false){
        attempts[JSON.stringify(a)] = (attempts[JSON.stringify(a)] || 0)+1
        if(attempts[JSON.stringify(a)] == 1){
            for(i = 0; i < a.length-1; i++){
                if(a[i] <= a[i+1]){
                    sorted = true
                }
                else{
                    sorted = false
                    i = a.length
                }
            }
        }
        if(a.length <= 1){
            sorted = true
        }
        if(sorted == false){
            a = shuffle(a)
        }
    }
    const ke = Object.keys(a)
    return [ke.length, a];
}

//i found an array shuffler online and made some modifications
const shuffle = (ar) => { 
    return ar.map((ab) => ({ sort: Math.random(), value: ab }))
        .sort((ab, b) => ab.sort - b.sort)
        .map((ab) => ab.value); 
}