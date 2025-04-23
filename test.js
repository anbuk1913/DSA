// let s = "helloworld"

// function remove(str){
//     if(str==""){
//         return ""
//     }
//     if(str[0]=="l"){
//         return remove(str.slice(1))
//     }
//     return str[0]+remove(str.slice(1))
// }



// console.log(remove(s))

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.prev = null
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size==0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//         } else {
//             let curr = this.head
//             node.next = curr
//             this.head = node
//         }
//         this.size++
//     }
//     remove(value){
//         if(this.isEmpty()){
//             return
//         }
//         else {
//             let curr = this.head
//             if(this.value == value){

//             }
//             while(curr.next && curr.next.value!=value){
//                 curr = curr.next
//             }
//             let remove = curr
//             curr.next = remove.next.next
//             this.size--
//         }
//     }
//     middle(){
//         if(this.isEmpty()){
//             return 
//         } else {
//             let curr = this.head
//             let s = this.size
//             s=Math.floor(s/2)
//             for(let i=0;i<s;i++){
//                 curr = curr.next
//             }
//             return curr.value
//         }
//     }
// }
// const list = new LinkedList()

// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// console.log(list.middle())
// console.log(list)


let arr = [2,3,4,5,6,7,9,10]
let tar = 8

function search(arr,tar){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        // console.log(left,right)
        let mid = Math.floor((left+right)/2)
        if(tar==arr[mid]){
            return mid
        }
        if(arr[mid]<tar){
            left = mid+1
        } else {
            right=mid-1
        }
    }
    return -1
}

console.log(search(arr,tar))