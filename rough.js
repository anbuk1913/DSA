// let nums = [32,76,54,52,57,97,42,83,62,20]


// Insertion Sort

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]<curr){
//             arr[j+1] = arr[j--]
//         }
//         arr[j+1] = curr
//     }
//     return arr
// }
// console.log(insertionSort(nums))


// Quick Sort

// function quickSort(arr){
//     if(arr.length<2)return arr
//     let left = []
//     let right = []
//     let pivot = arr[arr.length-1]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot)left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(nums))


// Bubble Sort

// function bubbleSort(arr){
//     let tem
//     do{
//         tem = false
//         for(let i=1;i<arr.length;i++){
//             if(arr[i]<arr[i-1]){
//                 arr[i] = arr[i]+arr[i-1]-(arr[i-1]=arr[i])
//                 tem = true
//             }
//         }
//     }while(tem)
//     return arr
// }
// console.log(bubbleSort(nums))

// function removeVow(str){
//     let name = []
//     let vow = ["a","e","i","o","u"]
//     for(let i of str){
//         if(!vow.includes(i)){
//             name.push(i)
//         }
//     }
//     return name.join("")
// }
// console.log(removeVow("vijayapriya"))

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.lenght;i++){
            total+= key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key, value){
        const index = this.hash(key)
        
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }
}

const obj = new HashTable(50)

obj.set("ak","Anbu")
obj.set("ka","kumar")
obj.remove("ka")
console.log(obj.get("ak"))
