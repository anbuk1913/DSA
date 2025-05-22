    let nums = [1,1,2,2,2,3]
    
    for(let i=1;i<arr.length;i++){
        let tem = score[i]
        let curr = arr[i]
        let j = i-1
        while(j>=0 && arr[j]<curr){
            score[j+1] = score[j]
            arr[j+1] = arr[j--]
        }
        score[j+1] = tem
        arr[j+1]=curr
    }
    console.log(arr)
    
    // console.log(score)