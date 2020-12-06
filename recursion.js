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
 
    
//RECURSION
//an outer function that calls an inner function that is recursive
function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result;
}

//PURE RECURSION
    //tips: for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them. remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings. To make copies of objects use the Object.assign, or the spread operator
    function collectOddValues(arr){
        let newArr = [];

        if(arr.length === 0){
            return newArr;
        }

        if(arr[0] % 2 !== 0){
            newArr.push(arr[0])
        }

        newArr = newArr.concat(collectOddValues(arr.slice(1)));
        return newArr;
    }
