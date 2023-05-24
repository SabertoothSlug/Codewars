function arrayDiff(a, b) {
  b.forEach((e,i)=>{
    a=a.filter(el=>el!=b[i])
})
return a
}