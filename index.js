//BIG O
function addUpTo(n){
    let total = 0;
    for (let i = 0; i <=n; i ++){
        total += 1
    }
    return total;
}
console.log(addUpTo(6))

//BIG O
function addUpTo(n){
    return n * (n+1) / 2
}
console.log(addUpTo(6))
