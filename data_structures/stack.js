//Stacks using singly linked lists. We add and remove from the beginning because it takes constant time O(1), whereas adding and removing from the end means we must traverse the whole list creating O(n) time complexity

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
    //this is similar to the unshift method 
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
    //this is similar to the shift method
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