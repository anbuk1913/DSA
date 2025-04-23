let arr=[2,5,2,5,4,1,5,7,5,9,7]

function bubbleSort(arr){
    let swap
    do{
        swap = false
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                let tem = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = tem
                swap = true
            }
        }
    } while(swap)
}
bubbleSort(arr)
console.log(arr)