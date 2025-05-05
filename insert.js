class Node{
    constructor(val){
        this.value = val
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
    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    insertVal(val,ind){
        if(this.size<ind) return false
        if(ind==0){
            this.prepend(val)
            return true
        } else {
            const node = new Node(val)
            let curr = this.head
            let pre = null
            let tem = 0
            while(tem<ind){
                pre = curr
                curr = curr.next
                tem++
            }
            if(pre == this.tail)this.tail = node
            pre.next = node
            node.next = curr
        }
        this.size++
        return true
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.insertVal(5,2)
console.log(JSON.stringify(list))