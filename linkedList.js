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
        }
        this.head = node
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
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
}

const newList = new LinkedList()

newList.append(1)
newList.append(2)
newList.append(3)
newList.append(4)
newList.reverse()
console.log(JSON.stringify(newList))