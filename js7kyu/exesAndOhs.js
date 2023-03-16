function XO(str) {
    let checkX=0
    let checkO=0
    let arr=str.split('')
    arr.forEach(element=>{
      if(element.toLowerCase()==='x'){
        checkX++
      }
      if(element.toLowerCase()==='o'){
        checkO++
      }
    })
  if (checkX===checkO){
    return true
  }else{
    return false
  }
} 