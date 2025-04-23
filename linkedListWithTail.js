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
        const node = new Node(value)
        if(!this.isEmpty()){
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            this.tail = node
            pre.next = node
        }
        this.size++
    }
    replace(value,index){
        if(this.size<index){
            return
        } else {
            let list = this.head
            for(let i=0;i<index;i++){
                list = list.next
            }
            list.value = value
        }
    }
    insert(value,index){
        if(this.size < index || index < 0){
            return
        }
        if(index == 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let list = this.head
            for(let i=0;i<index-1;i++){
                list = list.next
            }
            let tem = list.next
            list.next = node
            list = list.next
            list.next = tem
            this.size++
        }
    }
    removeIndex(index){
        if(index < 0 || index >= this.size){
            return
        }
        let removedElement
        if(index==0){
            removedElement = this.head
            this.head = this.head.next
        } else {
            let list  = this.head
            for(let i=0;i<index-1;i++){
                list = list.next
            }
            removedElement = list.next
            list.next = removedElement.next
        }
        this.size--
        console.log(removedElement.value)
    }
    removeElement(value){
        let removeValue
        if(this.isEmpty()){
            return
        }
        if(this.head.value == value){
            removeValue = this.head
            this.head = removeValue.next
            this.size--
        } else {
            let pre = this.head
            while(pre.next && pre.next.value != value){
                pre = pre.next
            }
            if(pre.next){
                removeValue = pre.next
                pre.next = removeValue.next
                this.size--
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return
        } else {
            let i=0
            let pre = this.head
            while(pre){
                if(value == pre.value){
                    return i 
                }
                i++
                pre = pre.next
            }
        }
    }
    reverse(){
        if(this.isEmpty()){
            return
        } else {
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    removeFromFront(){
        if(this.isEmpty()){
            return
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        if(this.size == 0){
            this.tail = null
        }
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return
        } else {
            let curr = this.head
            if(this.size==1){
                const removedElement = this.head.value
                this.head = null
                this.tail = null
                this.size--
                return removedElement
            }
            while(curr.next && curr.next != this.tail){
                curr = curr.next
            }
            let removeElement = this.tail.value
            curr.next = null
            this.tail = curr
            this.size--
            return removeElement
        }
    }
}

module.exports = LinkedList