class MinHeap{
    constructor(){
        this.heap = []
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeft(i){
        return i*2+1
    }
    getRight(i){
        return i*2+2
    }
    hasParent(i){
        return this.getParent(i)>=0
    }
    hasLeft(i){
        return this.getLeft(i) < this.heap.length
    }
    hasRight(i){
        return this.getRight(i) < this.heap.length
    }
    getParentValue(i){
        return this.heap[this.getParent(i)]
    }
    getLeftValue(i){
        return this.heap[this.getLeft(i)]
    }
    getRightValue(i){
        return this.heap[this.getRight(i)]
    }
    insert(i){
        this.heap.push(i)
        this.heapifyUp()
    }
    heapifyUp(){
        let i = this.heap.length-1
        while(this.hasParent(i)){
            if(this.getParentValue(i)>this.heap[i]){
                this.swap(i,this.getParent(i))
            } else {
                break
            }
            i = this.getParent(i)
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    remove(){
        if(this.heap.length == 0){
            return
        }
        if(this.heap.length == 1){
            return this.heap.pop()
        }
        let value = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return value
    }
    heapifyDown(){
        let i = 0
        while(this.hasLeft(i)){
            let minChild = this.getLeft(i)
            if(this.hasRight(i) && this.getLeftValue(i)>this.getRightValue(i)){
                minChild = this.getRight(i)
            }
            if(this.heap[i]<this.heap[minChild]){
                break
            } else {
                this.swap(minChild,i)
            }
            i = minChild
        }
    }
    heapSort(arr){
        let min = new MinHeap()
        for(let i of arr){
            min.insert(i)
        }
        let sorted = []
        while(min.heap.length){
            sorted.push(min.remove())
        }
        return sorted
    }
    peek(){
        if(!this.heap.length){
            return null
        } else {
            return this.heap[0]
        }
    }
    display(){
        for(let i of this.heap){
            console.log(i)
        }
    }
    kthsmallest(k=1){
        if(k>this.heap.length){
            return null
        } else {
            let min = new MinHeap()
            for(let i of this.heap){
                min.insert(i)
            }
            for(let i=0;i<k-1;i++){
                min.remove()
            }
            return min.heap[0]
        }
    }
}