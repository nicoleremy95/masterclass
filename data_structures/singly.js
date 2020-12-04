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
    //PUSHING PSEUDOCODE
        //this function should accept a value
        //create a new node using the value passed to the function
        //if there is no head property on the list, set the head and the tail to be the newly created node
        //otherwise set the next property on the tail to be the new node and set the tail property on the list ot be the newly created node
        //increment the length by 1
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
    traverse(){
        //one way to traverse
        var current = this.head;
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    //POPPING PSEUDOCODE
        //if there are no nodes in the list, return undefinded
        //loop thorugh the list until you reach the tail,
        //set the next property of the 2nd to last node to be null
        //set the tail to be the 2nd to last node
        //decrement the length of the list to by 1
        //return the value of the node removed
    pop(){
        if(!this.head){
            return undefined;
        }
        var current = this.head;
        var newTail = current; 
        //traverse while there is a node after the current one
        while(current.next){
            newTail = current;
            current = current.next;
        }
        console.log(current.val)
        console.log(newTail.val)

        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current; 
    }

    //SHIFTING PSEUDOCODE
        //if there are no nodes, return undefined
        //store the current head property in a variable
        //set the head property to be the current head's next property
        //decrement the length by 1
        //return the value of the node removed 
        shift(){
            if(!this.head){
                return undefined;
            }
            var currentHead = this.head;
            this.head = currentHead.next;
            this.length --;
            if(this.length === 0){
                this.tail = null;
            }
            return currentHead;
        }
    
    //UNSHIFT PSEUDOCODE
        //this function should accept a value
        //create a new node using the value passed to the function
        //if there is no head property on the list, set the head and tail to be the newly created node
        //otherwise set the newly created node's next property to be the current head property on the list
        //set the head property on the list to be that newly created node
        //increment the length by 1;
        //return new list;

        unshift(val){
            var newNode = new Node(val);
            
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else{
                newNode.next = this.head;
                this.tail = this.head;
            }
           
            this.length ++;
            return this;
        }
}


var list = new SinglyLInkedList()
list.push("hello")
list.push("goodbye")
list.push("!")