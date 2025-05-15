let nums = [32,76,54,52,57,97,42,83,62,20]


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

