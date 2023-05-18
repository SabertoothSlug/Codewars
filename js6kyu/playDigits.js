function digPow(n, p){
let arr=n.toString().split('')
console.log(arr)
let sum=0
for(let i=0;i<arr.length;i++){
sum=sum+Math.pow(arr[i],(p+i))
}
console.log(sum)
let rem=sum%n
console.log(rem)
if(rem==0){
    return sum/n
}else{
    return -1
}
}

digPow(89,1)