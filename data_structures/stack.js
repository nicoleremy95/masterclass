//Stacks using singly linked lists 
class Node{
    constructor(){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size ++; 
    }
    pop(){
        if(this.size === 0){
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return temp.val();
    }
}

var stack = new Stack()
//PUSHING : adding to the beginning and removing from the beginning for a singly linked list 