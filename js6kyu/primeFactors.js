function primeFactors(n) {
    let rem=n
    let answer=[]
    if(rem>1){
        while(rem>0){
            for(let i=2;i<=rem;i++){
                let start=rem
                if(i==rem){
                    answer.push(rem)
                    rem=0
                    i=start+1
                }else if(rem%i==0){
                    answer.push(i)
                    rem=rem/i
                    i=start+1         
                }
            }
        }
    }
    return answer
}
console.log(primeFactors(34535))