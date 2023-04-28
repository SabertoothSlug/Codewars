function findNextSquare(sq) {
    let check=Math.sqrt(sq)
    check=check-Math.floor(check)
    if (check==0){
        return Math.pow((Math.sqrt(sq)+1),2)
    }else{
        return -1; 
    }
  }
  console.log(findNextSquare(144))