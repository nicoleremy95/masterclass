


  //PART 1
    //if the head has nothing in it, the list is emtpy, return null
    if (head === null) return null;

    //create a new map for the copied list
    let copyMap = new Map();
    
    //set the index to 0
    let index = 0;
    
    //create a variable for an imaginary node before the head to set the pattern and initialize .next
    let beforeHead = new Node(0, null, null);
    
    //create an empty array to store values and access the index more easily
    let arr = [];
    
    //keep track of current and initially set it to equal the head and reflect the same logic for the copyCurrent
    let current = head;
    let copyCurrent = beforeHead;
   
    
    while (current !== null) {
        //push the current into the new array
        arr.push(current);
        
        //create a new node that accepts the current value and null for each pointer
        let node = new Node(current.val, null, null);
        
        //set the new map to take in the current index and the new node
        copyMap.set(index, node);
        
        //set the value of the new node to be the next value of the copied list
        copyCurrent.next = node;
        
        //travserse both the orignial and copied lists
        current = current.next;
        copyCurrent = copyCurrent.next;
        index++;
    }
    
    //PART 2
    
    //keep track of current and initially set it to equal the head and the copy of current is now the thing after before head 
    current = head;
    copyCurrent = beforeHead.next;
    
    while (current !== null) {
        //set a variable equal to the an index of the arr where the value is current.random
        let randomIndex = arr.indexOf(current.random);
        //if the random index falls within the give boundaries
        if (randomIndex > -1 && randomIndex < arr.length) {
            //set the random of copy current to equal the copyMap.get(randomIndex)
            copyCurrent.random = copyMap.get(randomIndex);
            
        }
        
        //set the next value of current and copy current in order to traverse
        current = current.next;
        copyCurrent = copyCurrent.next;
    }
    
    //return the 
    return beforeHead.next;           