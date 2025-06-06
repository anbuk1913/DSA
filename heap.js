class MaxHeap {
    constructor(){
        this.heap = []
    }

    getParent(i){
        return Math.floor((i - 1) / 2)
    }

    getLeft(i){
        return 2 * i + 1
    }

    getRight(i){
        return 2 * i + 2
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

    hasParent(i){
        return this.getParent(i) >= 0
    }

    hasLeft(i){
        return this.getLeft(i) < this.heap.length
    }

    hasRight(i){
        return this.getRight(i) < this.heap.length
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(i){
        this.heap.push(i)
        this.heapifyUp()
    }

    heapifyUp(){
        let i = this.heap.length - 1
        while (this.hasParent(i) && this.getParentValue(i) < this.heap[i]) {
            this.swap(i, this.getParent(i))
            i = this.getParent(i)
        }
    }

    remove(){
        if (this.heap.length === 0) return null
        let value = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapifyDown()
        return value
    }

    heapifyDown(){
        let i = 0
        while (this.hasLeft(i)) {
            let largerChildIndex = this.getLeft(i)
            if (this.hasRight(i) && this.getRightValue(i) > this.getLeftValue(i)){
                largerChildIndex = this.getRight(i)
            }

            if (this.heap[i] > this.heap[largerChildIndex]) {
                break
            } else {
                this.swap(i, largerChildIndex)
            }

            i = largerChildIndex
        }
    }

    heapSort(arr){
        let max = new MaxHeap()
        for (let i of arr) {
            max.insert(i)
        }
        let sorted = []
        while (max.heap.length) {
            sorted.push(max.remove())
        }
        return sorted.reverse()
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null
    }
}

const maxHeap = new MaxHeap()

maxHeap.insert(2)
maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(1)
maxHeap.insert(8)
console.log(maxHeap.heap)
console.log(maxHeap.heapSort(maxHeap.heap))
console.log(maxHeap)