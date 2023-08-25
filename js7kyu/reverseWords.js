function reverseWords(str) {
   let words=str.split(' ')
   words.forEach((element,i)=>{
    words[i]=element.split('').reverse().join('')
   })
   return words.join(' ')
  }

  function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }