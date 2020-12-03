//write a functinon called sumZero which accepts a sorted array of integers. The function should find hte first pair where the sum is 0; Return an array that includes both values that sum to zero or undefined if a pair does not exist; 

//NESTED FOR LOOP O(n^2)time complexity, O(1) space complexity
//**NOTE THIS WAY DOES NOT ACCOUNT FOR FALSE POSITIVE ZERO ANSWERS
function sumZero(arr){
    let newArr = [];
    //if the absolute value of arr[1] === the absolute value of arr[arr.length-1], then return those values 
    if(Math.abs(arr[0]) === Math.abs(arr[arr.length-1])){
        newArr.push(arr[0]);
        newArr.push(arr[arr.length-1])
        return newArr;
        //OR
        //return [arr[0], arr[arr.length-1]]
    }
    
    for(let i =0; i < arr.length; i ++){
        for (let j = 1; j <arr.length; j ++){
            if((arr[i] + arr[j]) === 0){
                newArr.push(arr[i]);
                newArr.push(arr[j]);
                return newArr;
                //OR
                //return [arr[i], arr[j]];
            }
        }
        
    }
    return undefined;
}
sumZero([-2,0,1,3]) //undefined

// Multiple Pointers, O(n) time complexity, O(1) space complexity

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left, arr[right]]]
        } else if(sum > 0){
           right --;
        } else {
            left ++;
        }
    }
}
sumZero([-4, -3, -2, -1, 0 , 4, 5, 10])