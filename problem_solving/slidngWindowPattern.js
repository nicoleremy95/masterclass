//SLIDING WINDOW PATTERN 

//write a function called maxSubArrSum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

//** interview questions: what should the answer be if the sums are the same? what if the array contains only one number? Return or print value? 

//BIG O(n^2)
function maxSubArrSum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  maxSubArrSum([2,6,9,2,1,8,5,6,3],3)
  
  
//Sliding Window Approach, O(n)
function maxSubArrSum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    //edge case: if the array has less numbers than the consecutive parameter, return null
    if(arr.length < num){
        return null;
    }

    //add the first round of integers together
    for(let i = 0; i < num; i ++){
        maxSum += arr[i];
    }

    //run a for loop that adds the next index but removes the very first index
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        //make the new maxSum the calculated tempSum if it is larger
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;

}