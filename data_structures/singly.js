//Node
    //val
    //next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//SinglyLInkedList
    //length
    //head
    //tail
    
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
        //GET PSEUDOCODE
            //accept an index
            //if the index is less than zero or greater than or equal to the length of the list, return null
            //loop through the list until you reach the index and return the node at that specific index
        get(index){
            if(index < 0 || index >= this.length){
                return null;
            }
            var current = this.head;
            var counter = 0;
            while(counter !== index){
                current = current.next 
                counter ++;
            }
            return current;
        }
        //SET PSEUDOCODE
            //accept a value and an index
            //use the get function to find the specific node
            //if the node is not found, return false
            //if the node is found, set the value of that node to be the value passed to the function and return true
        set(index, val){
            var foundNode = this.get(index)
            if(foundNode){
                foundNode.val = val;
                return true;
            }
            
            return false;
        }

        //INSERT PSEUDOCODE
            //takes in index and value
            //if index is less than zero or greater than the length, return flase
            //if the index is the same as the length, push a new node to the end of the list
            //if the index is 0, unshft a new node to the start of the list
            //otherwise, using get method, access the node at the index -1
            //set the next property on that node to be the new node
            //est the next property ont he new node to be the previous next
            //increment the length
            //return true
        insert(index, val){
            if(index < 0 || index > this.length){
                return false;
            }
            if(index === this.length){
                 this.push(val);
                 return true;
            }
            if(index === 0){
                this.unshift(val)
                return true;
            }
            //create new node 
            var newNode = new Node(val)
            //define previous node 
            var previous = this.get(index-1);
            //set the node that will come after the new node
            var temp = previous.next;
            previous.next = newNode;
            newNode = temp;
            //increase the length
            this.length ++;
            return true;
            
        }

        //REMOVE PSEUDOCODE
            //if the index is less than zero or greater than the length, return undefined
            //if the index is the same as the length -1, pop method
            //if the index is 0, shift method
            //otherwise, using the get method, access the node at the index -1
            //set the next property on that node to be the next of the next node
            //decrement the length
            //return the value of the node removed
        remove(index){
            if(index < 0 || index > this.length){
                return undefined;
            }
            if(index === length -1 ){
                this.pop()
            }
            if(index === 0){
                this.shift()
            }
            var previous = this.get(index -1);
            var removed = previous.next;
            previous.next = removed.next;
            this.length --;
            return removed

        }
        //REVERSE PSEUDOCODE
            //Swap the head and tail
            //create a vaiable called next
            //create a variable called prev
            //create a variable called node and initialize it to the head property
            //loop through the list
            //set next to be the next property on whatever node is
            //set the next property on the node to be whatever prev is
            //set prev to be the value of the node variable
            //set the node variable to be the value of the next variable
        reverse(){
            var node = this.head;
            this.head = this.tail;
            this.tail = node;
            var next;
            var prev = null;
            for(let i = 0; i < this.length; i ++){
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            return this;
        }
        //use this method to print values in an array
        print(){
            var arr= [];
            var current = this.head
            while(current){
                arr.push(current.val)
                current = current.next;
            }
            console.log(arr);
        }
}


var list = new SinglyLInkedList()
list.push("hello")
list.push("goodbye")
list.push("!")