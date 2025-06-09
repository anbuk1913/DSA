class MaxHeap{
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
        return this.getLeft(i)<this.heap.length
    }
    hasRight(i){
        return this.getRight(i)<this.heap.length
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
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    heapifyUp(){
        let i = this.heap.length-1
        while(this.hasParent(i)){
            if(this.heap[i]>this.getParentValue(i)){
                this.swap(i,this.getParent(i))
            } else {
                break
            }
            i = this.getParent(i)
        }
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
            let largestChild = this.getLeft(i)
            if(this.hasRight(i) && this.getRightValue(i)>this.getLeftValue(i)){
                largestChild = this.getRight(i)
            }
            if(this.heap[i]>this.heap[largestChild]){
                break
            } else {
                this.swap(i,largestChild)
            }
            i = largestChild
        }
    }
    heapSort(){
        let arr = new MaxHeap()
        for(let i of this.heap){
            arr.insert(i)
        }
        let sorted = []
        while(arr.heap.length){
            sorted.push(arr.remove())
        }
        return sorted
    }
    display(){
        for(let i of this.heap){
            console.log(i)
        }
    }
    peek(){
        if(!this.heap.length){
            return null
        } else {
            return this.heap[0]
        }
    }
    kthLargest(k=1){
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