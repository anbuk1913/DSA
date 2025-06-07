class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        } else {
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left){
                this.insertNode(root.left,node)
            } else {
                root.left = node
            }
        } else {
            if(root.right){
                this.insertNode(root.right,node)
            } else {
                root.right = node
            }
        }
    }
    search(value,root){
        if(!root){
            return false
        } else {
            if(root.value == value){
                return true
            }
            if(value < root.value){
                return this.search(value,root.left)
            } else {
                return this.search(value,root.right)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.pop()
            if(curr.right){
                queue.push(curr.right)
            }
            if(curr.left){
                queue.push(curr.left)
            }
            console.log(curr.value)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }
    delete(value){
        return this.deleteNode(value,this.root)
    }
    deleteNode(value,root){
        if(root == null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.value,root.right)
        }
        return root
    }
    second(root){
        if(!root || !root.left && !root.right){
            return null
        } else {
            let curr = root
            while(curr){
                if(curr.right && !curr.right.left && !curr.right.right){
                    return curr.value
                }
                else if(!curr.right && curr.left){
                    return this.max(curr.left)
                }
                curr = curr.right
            }
        }
    }
    depth(root){
        if(!root){
            return 0
        }
        let leftDepth = this.depth(root.left)
        let rightDepth = this.depth(root.right)
        return Math.max(leftDepth,rightDepth)+1
    }
}