class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right =null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    //      10
    //  5       13
    //2   6   8    15

    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        } else{
            var current = this.root;
            //continue over and over while true
            while(true){
                if(val = current.val){
                    return undefined;
                }
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                } else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
            
        }
    }
}

var tree = new binarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);