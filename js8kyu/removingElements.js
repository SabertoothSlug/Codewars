function removeEveryOther(arr){
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        
            arr2.push(arr[i])
            i++
    }
    return arr2
  }

  let arr=['keep','remove','keep','remove']
  console.log(removeEveryOther(arr))
