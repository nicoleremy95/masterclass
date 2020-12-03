//implement a function called countUniqueValues, which accepts a sorted array, and counts the unique vlaues in the array. There can be negative numbers in the array, but it will always be sorted. 

//*Questions to ask interviewer: What are the edge cases? Do you want to see the absolute value of each number counted? return value or print it? 
//Big O, O(n) time complexity

function countUniqueValues (arr) {
    //create two pointers that will traverse the array

    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
    

}

countUniqueValues([-4, -2, -2, 0, 1, 3, 3])