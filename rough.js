

const heap = new MinHeap()

heap.insert(3)
heap.insert(6)
heap.insert(7)
heap.insert(8)
heap.insert(9)
heap.insert(0)
heap.insert(1)
heap.insert(2)
// heap.display()
console.log(heap.heapSort(heap.heap))
console.log(heap.kthsmallest(9))