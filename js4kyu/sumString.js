function sumStrings(a,b) { 
const aNum=isNaN(parseInt(a))?BigInt(0):BigInt(a)
const bNum=isNaN(parseInt(b))?BigInt(0):BigInt(b)
const sum=aNum+bNum
console.log(aNum)
console.log(bNum)
console.log(sum)
console.log(sum.toString())
return sum.toString()
}

sumStrings('712569312664357328695151392', '8100824045303269669937')