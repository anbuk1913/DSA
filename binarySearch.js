let arr=[1,2,26,29]
let tar=29

function binarySearch(arr,tar){
    let leftSearch = 0
    let rightSearch = arr.length-1
    while(leftSearch<=rightSearch){
        let midd = Math.floor((leftSearch+rightSearch)/2)
        if(arr[midd]==tar){
            return midd
        }
        if(arr[midd]<leftSearch){
            rightSearch = midd - 1
        } else {
            leftSearch = midd + 1
        }
    }
    return -1
}

console.log(binarySearch(arr,tar))