    let  score = [10,3,8,9,4]


    let tem = [...score]
    tem = tem.sort((a,b)=>b-a)

    for(let i=0;i<score.length;i++){
        for(let j=0;j<tem.length;j++){
            if(score[i]==tem[j] && j==0){
                score[i] = "Gold Medal"
                break
            }
            else if(score[i]==tem[j] && j==1){
                score[i] = "Silver Medal"
                break
            }
            else if(score[i]==tem[j] && j==2){
                score[i] = "Bronze Medal"
                break
            }
            else if(score[i]==tem[j]){
                console.log(j+1)
                score[i] = String(j+1)
                break
            }
        }
    }
    console.log(score)