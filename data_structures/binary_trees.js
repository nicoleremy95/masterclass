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

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BreadthFirstSearch(){
        //visit the node and then the children of the node from left to right, and then the next level of children from left to right and so on
        var data = [];
        var queue = [];
        var newNode = this.root;
        queue.push(this.root);
        while(queue.length > 0){
            newNode = queue.shift();
            data.push(newNode.val)
            if(newNode.left){
                queue.push(newNode.left);
            }
            if(newNode.right){
                queue.push(newNode.right);
            }
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];

        function traverse(node){
            data.push(node.val);
            //visit the root,then the entire left side and then the entire right side
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root)
        return data;
    }
    //go to the left and look at the last children first, and then go up to the parent. once the left side is done do this on the right, and then check the root last
}

var tree = new binarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);