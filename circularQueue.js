class CircularQueue{
    constructor(size){
        this.size = size
        this.table = Array(size)
        this.rear = -1
        this.front = -1
    }
    dequeue(){
        if(this.front == -1){
            return "Queue is empty"
        }
        const item = this.table[this.front]
        if(this.front == this.rear){
            this.rear = this.front = -1
        } else {
            this.front = (this.front+1)%this.size
        }
        return item
    }
    enqueue(val){
        if(this.rear+1%this.size === this.front){
            console.log("Queue is full")
            return
        }
        if(this.front === -1){
            this.front = 0
        }
        this.rear = this.rear+1%this.size
        this.table[this.rear] = val
    }
}
const cq = new CircularQueue(5)
cq.enqueue(4)
cq.enqueue(6)
cq.enqueue(8)
console.log(cq.dequeue())
console.log(cq)