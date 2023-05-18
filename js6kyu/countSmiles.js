//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count=0
  arr.forEach((x)=>{
    const spliter=x.split('')
    console.log(spliter)
    if(spliter.length==2||spliter.length==3){
        const first=spliter.indexOf(')')
        const second=spliter.indexOf('D')
        console.log(first)
        console.log(second)
        if(first!=-1||second!=-1){
            const third=spliter.indexOf(':')
            const fourth=spliter.indexOf(';')
            if(third!=-1||fourth!=-1){
                if(spliter.length==3){
                    if(spliter[1]=='-'||spliter[1]=='~'){
                        count++
                }
            }else{
                count++
            }
        }
    }

    }
    
  })
  return count

  }

  console.log(countSmileys([':D',':~)',';~D',':)']))

  function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }