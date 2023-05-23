function persistence(num) {
    let splits=0
    while(num>9){
        num=num.toString().split('')
        console.log(num)
        let red=num.reduce((c,a)=>c * a,1)
        console.log(red)
        splits++
        num=red
    }
    return splits
 }
 persistence(39)