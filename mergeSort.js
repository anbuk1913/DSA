function mergeSort(arr){
    if(arr.length<2)return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return sort(left,right)
}

function sort(left,right){
    let ans = []
    let i=0,j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            ans.push(left[i++])
        } else {
            ans.push(right[j++])
        }
    }
    return ans.concat(left.slice(i)).concat(right.slice(j))
}