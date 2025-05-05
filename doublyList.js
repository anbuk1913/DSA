class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
        this.tail = null
    }
    isEmpty(){
        return this.size==0
    }
    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
}

const list = new LinkedList()

list.append(2)
list.append(3)
console.log(list)