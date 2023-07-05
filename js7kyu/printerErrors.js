function printerError(s) {
const length=s.length
let err=0
const arr=s.split('')
regex=/[a-m]/
arr.forEach(element=>{
if(!regex.test(element)){
err++
}
})
return `${err}/${length}`
}
