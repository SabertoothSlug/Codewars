function isIsogram(str){
  let arr=str.toLowerCase().split('')
  let iso=true
  arr.sort()
  arr.forEach((element,i) => {
    if(i+1<arr.length){
        if(element==arr[i+1]){
            iso=false
        }
    }
    
  });
  return iso
}

console.log(isIsogram("moOse"))

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }