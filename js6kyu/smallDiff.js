function oneCharDifference(s1, s2) {
    let count=0
    let vcount=0
    let arr2=s2.split('')
    arr1=s1.split('')
    let v = 0
    for(let i=0;i<arr1.length;i++){
     
        if(count==0&&arr1[i]!==arr2[v]){
            count++
            console.log(arr1[i])
            
        }
        if(count==1&&arr1[i]!==arr2[v]&&vcount>0){
            count++
            console.log(arr1[i])
            
        }
        if(count==1&&arr1[i]!==arr2[v]&&vcount==0){
            if(arr1[i]==arr2[v-1]){
                v--
                vcount++
            }
            if(arr1[i]==arr2[v+1])
            v++
            vcount++
        }
       
        v++
    }
    if (arr1.length!=arr2.length){
        count++
    }    
    if(count==1){
        return `${s1} and ${s2} differ by one letter`
    }else if(count==0){
        return `same string`
    }else{
        return `${s1} and ${s2} differ by more than one letter`
    }
}

console.log(oneCharDifference('grant', 'grannt'))

