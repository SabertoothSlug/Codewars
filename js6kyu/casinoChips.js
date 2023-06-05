function solve(arr){
    //Casino chips 6kyu
    let big =arr.reduce((a,b)=>Math.max(a,b),0)
    let count=0
    let answ=0
    const sub=arr.filter(val=>val<big)
    let second=sub.reduce((a,b)=>Math.max(a,b),0)
    let third=arr.reduce((a,b)=>Math.min(a,b),Infinity)

    console.log(big)
    console.log(sub)
    console.log(second)
    console.log(third)
    const sum=second+third
        while((second+third)>big&&(third>0)){
            second--
            third--
            count++
        }
        answ=count+second+third
return answ

}
solve([4,1,2])