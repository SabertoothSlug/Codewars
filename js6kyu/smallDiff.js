function oneCharDifference(s1, s2) {
    let count=0
    let vcount=0
    let arr2=s2.split('')
    arr1=s1.split('')
    let v = 0
    for(let i=0;i<arr1.length;i++){
     
        if(count==0&&arr1[i]!==arr2[v]){
           if(arr1[i]==arr2[v-1]){
            v--
            vcount++
            count++
            console.log('1')
           }else if(arr1[i]==arr2[v+1]){
            v++
            vcount++
            count++
            console.log('2')
           }else{
            count++
            console.log('3')
           }
            
        }else if(count==1&&arr1[i]!==arr2[v]&&vcount>0){
            count++
            console.log('4')
            
        }else if(count==1&&arr1[i]!==arr2[v]&&vcount==0){
            if(arr1[i]==arr2[v-1]){
                v--
                vcount++
                
                console.log('5')
            }else if(arr1[i]==arr2[v+1]){
                v++
            vcount++
            
            console.log('6')
            }else{
                count++
                console.log('7')
            }
            
        }
       
        v++
    }
    if(arr1.length==arr2.length){
        if(arr1[0]==arr2[0]&&arr2[arr2.length-1]!=arr1[arr1.length-1]){
            count++
        }
    }
    if (arr1.length<arr2.length){
       

        if(arr2[arr2.length-1]!=arr1[arr1.length-1]){
            count++
        }
    }
    if(!s1&&s2){
        count++
    }    
    if(count==1){
        console.log(`${s1} and ${s2} differ by one letter`)
        return true
    }else if(count==0){
        console.log(`same string`)
        return false
    }else{
        console.log(`${s1} and ${s2} differ by more than one letter`)
        return false
    }
}

console.log(oneCharDifference('grant', 'gant'))

function oneCharDifference(a, b) {
    let  m = a.length
    ,    n = b.length
    , diff = 0;
    
    for (let i = 0, j = 0; i < m || j < n; i++, j++) {
      
      if (a[i] === b[j])
        continue;
      
      diff++;
      
      if(a[i + 1] === b[j])
        j--;
        
      else if(a[i] === b[j + 1])
        i--;
    }
    
    return diff === 1;
  }