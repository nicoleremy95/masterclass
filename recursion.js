//RECURSIVE
function countDown(num){
    //this checks for the base case of 0 which ends the function
    if(num <=0){
        console.log("All doone!")
        //return ends the function otherwise it would keep running
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5)

//NON RECURSIVE
function countDown(num){
    for(let i = num; i > 0; i --){
        console.log(i);
    }
    console.log("all done!")
}


//RECURSIVE
    //all values are waiting on the call stack and are added up at the end when you reach the base case (1)
function sumRange(num){
    if (num ===1) return 1;
    return num + sumRange(num-1);
}
sumRange(3) // 6

//NONRECURSIVE
    //4! = 4*3*2*1  
    function factorial(num){
        let total = 1;
        for(let i = num; i > 1; i--){
            total *=1;
        }
        return total;
    }
    factorial(4) //24
//RECURSIVE
    //4! = 4*3*2*1
    function factorial(num){
        if(num ===1)return 1;
        return num * factorial(num-1)
    }
    factorial(5)
    