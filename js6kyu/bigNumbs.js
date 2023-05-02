function narcissistic(value) {
    let string=value.toString()
    const digits=string.length
    let sum=0
    for(let i=0;i<digits;i++){
        sum+=Math.pow(string[i],digits)
    }
    // console.log(string)
    // console.log(digits)
    // console.log(sum)
    if (sum==value){
        return true
    }else{
        return false
    }
    

}

narcissistic(153)