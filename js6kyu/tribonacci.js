function tribonacci(signature,n){
    let seq=signature
    let indy=0
    if(n<=3){
        while(seq.length>n){
            seq.pop()
        }
        return seq
    }else{
        while(seq.length<n){
            let sum=0
            for(i=0;i<3;i++){
                sum+=seq[indy+i]
            }
            seq.push(sum)
            indy++
        }
        return seq
    }
  }

  function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
  }