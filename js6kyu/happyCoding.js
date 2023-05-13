function happyCoding(nickname){
    let arr = nickname.split(' ')
    let answer
    arr1=arr.map(x=>x.toLowerCase())
    let hap=arr1.indexOf('happy')
    let cod=arr1.indexOf('coding')
    console.log(hap)
    console.log(cod)
    if(hap==-1){
        if (cod==-1){
            return 5
        }else{
            return 3
        }
        
    }else if(cod==-1){
        return 4
    }else{
        if (hap>cod){
            return 2
        }else{
            return 1
        }
    }
} 
    
    
    
    
    // console.log(arr[0].toLowerCase())
    // console.log(arr[1])


//     if(arr[0].toLowerCase()=='happy'){
//       if (arr[1].toLowerCase()=='coding'){
//         return 1
//       }else{
//         return 4
//       }
//     }else if (arr[0].toLowerCase()=='coding') {
//         if (arr[1].toLowerCase()=='happy'){
//             return 2
//         }else{
//             return 3
//         }
        
//     }else{
//         return 5
//     }
    
    


  console.log(happyCoding("hafppy codding"))