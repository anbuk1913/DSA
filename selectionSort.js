function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!=i){
            arr[min] = arr[min]+arr[i]-(arr[i]=arr[min])
        }
    }
    return arr
}
let arrrr = [32,45,67,24,64,42,57,13,24,64]
console.log(selectionSort(arrrr))