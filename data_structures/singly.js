//define a class for each node
//piece of data -val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi")
// first.next = new Node ("there")
// first.next.next = new Node ("buddy")
// first.next.next.next = new Node ("!")

//----------------------------------------------------------------------------------------------------------

//PUSHING PSEUDOCODE
//this function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and the tail to be the newly created node
//otherwise set the next property on the tail to be the new node and set the tail property on the list ot be the newly created node
//increment the length by 1

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLInkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
}


var list = new SinglyLInkedList()
list.push("hello")
list.push("goodbye")