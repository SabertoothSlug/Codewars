var isSquare = function(n){
    let check=Math.sqrt(n)
    if(Math.ceil(check)==check){
        return true
    }else{
        return false
    }
  }
  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }