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
    removeInd(ind){
        if(this.size<=ind){
            return false
        }
        let rem
        if(ind==0){
            rem = this.head
            this.head = this.head.next
            if(this.head==1){
                this.tail = null
            }
        } else {
            let prev
            let curr = this.head
            let tem = 0
            while(tem<ind){
                prev = curr
                curr = curr.next
                tem++
            }
            rem = curr
            prev.next = curr.next
            if(this.tail === curr){
                this.tail = prev
            }
        }
        this.size--
        return rem.value
    }
    removeVal(val){
        let rem
        if(this.head.value == val){
            rem = this.head
            this.head = this.head.next
            if(this.size == 1){
                this.tail = null
            }
        } else {
            let prev = null
            let curr = this.head
            while(curr && curr.value!=val){
                prev = curr
                curr = curr.next
            }
            if(!curr)return false
            rem = curr
            if(this.tail==curr)this.tail = prev
            prev.next = curr.next
        }
        this.size--
        return rem.value
    }
}

const list = new LinkedList()

// list.append(5)
list.append(3)
list.prepend(6)
list.removeVal(4)
console.log(JSON.stringify(list))