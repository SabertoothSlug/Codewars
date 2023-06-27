//Counting Duplicates

function duplicateCount(text){
    text=text.toLowerCase()
    text=text.split('').sort()
    let count=0
    console.log(text)
    text.forEach((element,i) => {
        if(element!=text[i-1]&&element==text[i+1]){
            count+=2
        }else if(element==text[i-1]&&element==text[i+1]){
            count++
        }
    });
    return count
  }

  function duplicateCount(text){
    text=text.toLowerCase()
    text=text.split('').sort()
    let count=0
    let tog=1
    text.forEach((element,i) => {
        if(tog&&element==text[i+1]){
            count++
            tog=0
        }else if(!tog&&element!=text[i+1]){
            tog=1
        }
    });
    
    return count
  }

  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

