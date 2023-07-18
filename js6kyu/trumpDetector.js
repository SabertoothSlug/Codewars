function trumpDetector(trumpySpeech){
  let regex=/[aeiou]/
  let base=0
  let extra=0
  let arr=trumpySpeech.toLowerCase().split('')
  for(let i=0;i<arr.length;i++){
    if(regex.test(arr[i])){
        base++
        let m=i+1
        while(arr[m]===arr[i]){
            extra++
            m++
        }
        i=m-1
    }
  }
  let ratio=extra/base
  if(ratio%1!=0){
    return Number((extra/base).toFixed(2))
  }else{
    return ratio
  }
  }

  function trumpDetector(trumpySpeech){
    arr = trumpySpeech.match(/([aeiou])(\1*)/ig)
    return +(arr.map(x => x.length-1).reduce((x,y) => x+y, 0) / arr.length).toFixed(2);
  }

  function trumpDetector(trumpySpeech){
    const dup = trumpySpeech.match(/([aeiou])\1+/gi)||[];
    return +((dup.join('').length-dup.length)/(trumpySpeech.match(/([aeiou])\1*/gi)||[]).length).toFixed(2);
  }