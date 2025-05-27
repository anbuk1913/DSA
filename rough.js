    let n = 10, m = 3
    
    let num1 = []
    let num2 = []

    let ans = 0
    for(let i=1;i<=n;i++){
        if(i%m){
            num1.push(i)
        } else {
            num2.push(i)
        }
    }
    for(let i=0;i<num1.length;i++)ans+=num1[i]
    for(let i=0;i<num2.length;i++)ans-=num2[i]
    console.log(ans)