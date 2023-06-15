function sortByLength (array) {
   array.sort(compare)
   return array
  };

function compare(a,b){
    return a.length-b.length
}