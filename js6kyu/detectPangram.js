function isPangram(string){
    let result=true
    const alpha='abcdefghijklmnopqrstuvwxyz'
    const list=alpha.split('')
    list.forEach((a,i)=>{
        if(string.toLowerCase().split('').indexOf(a)==-1){
            result=false
        }
    })
    console.log(result)
  }
  isPangram('Cwm fjord bank glyphs vext quiz')