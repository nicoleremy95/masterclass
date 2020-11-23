//TIME COMPLEXITY IN JAVASCRIPT
//RULES 
//Constants don't matter
//arithmetic operations are constant
//variable assignment is constant,
//Accessing elements in an array (by index or object (by key)) is constant
//In a loop, the complexity is the length of the loop times the complexity of what happens inside

//EXAMPLES
//O(2093) should be written as O(1)
//O(2n) should be written as O(n)
//O(n+10) should be written as O(n)
//O(n^2 +8) should be written as O(n^2)
//O(n^2 + 5n + 8) should be written as O(n^2)


//----------------------------------------------------------------------------------------------------------
//SPACE COMPLEXITY IN JAVASCRIPT
//most primitives (booleans, numbers, undefined, null), are constant space
//strings require O(n) space where n is the string length
//reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)
//calculates the amount of space or memory the algorithm takes up

//----------------------------------------------------------------------------------------------------------
// BIG 0 OF OBJECTS (objects are quicker than arrays and they don't have order)
//insertion O(1)
//removal O(1)
//searching O(n)
//access O(1)
//Object.keys O(n)
//Object.values O(n)
//Object.entries O(n)
//Object.hasOwnProperty O(1)

//----------------------------------------------------------------------------------------------------------
// BIG 0 OF ARRAYS (intrinsic order to data, but much slower than objects)
//insertion and removal .push() & .pop() O(1) because it only concerns to the end, .unshift() & .shift() O(n) because all elements have to be re-indexed
//searching O(n)
//access O(1)

//.push() O(1)
//.pop() O(1)
//.shift() O(n)
//.unshift() O(n)
//.concant() O(n)
//.slice() O(n)
//.splice() O(n)
//.sort() O(n * log n)
//.forEach/map/filter/reduce/etc. O(n)