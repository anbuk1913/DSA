class Node{
    constructor(value){
        this.value = value
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
        return this.size == 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
}