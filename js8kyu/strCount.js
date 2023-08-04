function strCount(str, letter){  
    let count=0
    str.split('').forEach(element=>{
        if(element==letter){
            count++
        }
    })
    return count
  }
  
  let count=0
  str.split('').forEach(element=>element==letter?count++:count)
  return count
