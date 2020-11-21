//BIG O, f(n)=n,  O(n)
//1 addition in a loop n times (n additions), n assignments as you do total +=, i++ scales with n, total = 0 is one assingment, i = 1 is 1 assignment, i <=n is n comparisons
function addUpTo(n){
    let total = 0;
    for (let i = 0; i <=n; i ++){
        total += 1
    }
    return total;
}
console.log(addUpTo(6))

//BIG O, f(n)=1, O(1)
//1 multiplication, 1 addition, 1 division = 3 operations, this will always be the case regardless of the size of n
function addUpTo(n){
    return n * (n+1) / 2
}
console.log(addUpTo(6))


//BIG O, f(n)= n, O(n)         
function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }
  
  //BIG 0, f(n)= n^2, O(n^2)
  function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }

  //BIG O, O(1)
  //n increases each time until it reaches 10, after that you have the same amount of steps until infinity therefore you generalize as O(1)
  function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

//BIG 0, O(n^2)
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}