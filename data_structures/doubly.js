//Node
    //val
    //next


    //prev
    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }
    
//DoublyLinkedList
    //head
    //tail
    //length

    class DoublyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(val){
            //create the new node
            var newNode = new Node(val);
            //if there are no nodes already, set the newNode to be both the head and the tail
            if(this.length === 0){
                this.head = newNode;
                this.tail = newNode;
            } 
            //otherwise
            else {
                //set the newNode to be the position after the tail
                this.tail.next = newNode;
                //the node before the newNode should now be the tail
                newNode.prev = this.tail;
                // the tail should now be the newNode
                this.tail = newNode;
            }
            //always increase the length of the list
            this.length++;
            //return the whole list
            return this;
        }
        pop(){
            if(!this.head){
                return undefined;
            }
            var poppedNode = this.tail;
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            } else{
                this.tail = poppedNode.prev;
                this.tail.next = null;
                poppedNode.prev = null;
            }
            this.length --;
            return poppedNode;
        }
        shift(){
            if(!this.head){
                return undefined;
            }
            var oldHead = this.head;
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            } else {
                var newHead = oldHead.next;
                newHead.prev = null;
                oldHead.next = null;
            }
            
            this.length --;
            return oldHead;
        }
        unshift(val){
            var newNode = new Node(val);

            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else{
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length ++;
            return this;
        }
        get(index){

            if(!this.length === 0){
                return null;
            }
            if(index < 0 || index >= this.length){
                return null;
            }
            var middle = Math.floor(this.length/2)
            var count;
            var current; 
            if(index >= middle){
                //start from the tail 
                //traverse
                current = this.tail;
                count = 0;
                while (count !== index){
                    current = current.prev;
                    count--;
                }
            } else{
                //start from the head
                //traverse  
                current = this.head
                count = this.length -1
                while(count !== index){
                    current = current.next;
                    count ++;
                } 
            }
            return current; 
        }
      
    }

    var list = new DoublyLinkedList()