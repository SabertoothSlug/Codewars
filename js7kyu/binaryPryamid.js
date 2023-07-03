function binaryPyramid(m,n){
    sum=0
    for(let i=m;i<=n;i++){
        sum+=Number(i.toString(2))
    }
    return sum.toString(2)
    }