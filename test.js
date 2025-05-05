class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
        this.tail = null
    }
    isEmpty(){
        return this.size == 0
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
    reverse(){
        if(this.isEmpty()){
            return
        } else {
            let pre = null
            let next = null
            let curr = this.head
            while(curr !== null){
                next = curr.next
                curr.next = pre
                pre = curr
                curr = next 
            }
            this.head = pre
        }
    }
    sort(){
        let swapped = false
        do{
            let curr = this.head
            swapped = false
            while(curr.next){
                if(curr.data>curr.next.data){
                    curr.data = (curr.data+curr.next.data) - (curr.next.data = curr.data)
                    swapped = true
                }
                curr = curr.next
            }
        }while(swapped)
        return this.head
    }
    removeInd(ind){
        if(this.isEmpty){
            return
        }
    }
}

function mergeList(list1,list2){
    let curr = list1.head
    while(curr.next != null){
        curr = curr.next
    }
    curr.next = list2.head
    return list1.head
}

const list1 = new LinkedList()
list1.prepend(2)
list1.append(3)
list1.append(4)
list1.prepend(1)
list1.sort()
console.log(JSON.stringify(list1))