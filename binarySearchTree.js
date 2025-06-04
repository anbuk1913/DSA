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
            if(root.left === null){
                root.left = node
            } else {
                this.insertNode(root.left,node)
            }
        } else {
            if(root.right === null){
                root.right = node
            } else {
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value == value)return true
            if(root.value<value){
                return this.search(root.right,value)
            } else {
                return this.search(root.left,value)
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
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.pop()
            console.log(curr.value)
            if(curr.right){
                queue.push(curr.right)
            }
            if(curr.left){
                queue.push(curr.left)
            }
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
        this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            } else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    second(root){
        if(!root || !root.left && !root.right){
            return null
        }
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

const tree = new BinaryTree()

tree.insert(800)
tree.insert(4)
tree.insert(2)
tree.insert(6)
tree.insert(1)
tree.insert(3)
tree.insert(5)
tree.insert(7)
tree.insert(12)
tree.insert(10)
tree.insert(14)
tree.insert(9)
tree.insert(11)
tree.insert(13)
tree.insert(15)
tree.preOrder()