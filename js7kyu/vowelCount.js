function getCount(str) {
    if(str.match(/[aeiou]/gi)){
      return str.match(/[aeiou]/gi).length
    }else{
      return 0
    }
     }
