function tribonacci(signature,n){
    let seq=signature
    if(n===0){
        return []
    }else{
        while(seq.length<n){
            console.log(seq)
            seq.push((Number(seq[-1])+Number(seq[-2])+Number(seq[-3])))
        }
        return seq
    }
  }