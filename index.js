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

  