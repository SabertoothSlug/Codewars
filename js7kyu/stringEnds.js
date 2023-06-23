function solution(str, ending){
    let arr1=str.split('')
    let result=true
    let arr2=ending.split('')
    for(let i=arr2.length-1;i>=0;i--){
        if(arr2[i]==arr1[arr1.length-1]){
            arr1.pop()

        }else{
            result=false
            arr1.pop()
        }
    }
    return result
  }

  function solution(str, ending){
    return str.endsWith(ending);
  }

