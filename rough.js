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
        return this.size===0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            let nextData = this.head
            node.next = this.head
            this.head.next = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            this.tail = node
            curr.next = node
        }
        this.size++
    }
    insert(value,index){
        if(this.size < index){
            return
        }
        if(index==0){
            this.prepend(value)
        }
        else if(index==this.size){
            this.append(value)
        } else {
            let  curr = this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            let last = curr.next
             
        }
    }
}

const likedList = new LinkedList

likedList.append(1)
likedList.prepend(2)
console.log(likedList)
