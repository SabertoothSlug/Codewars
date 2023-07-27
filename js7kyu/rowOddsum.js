function rowSumOddNumbers(n) {
    function rowSumOddNumbers(n) {
        return Math.pow(n, 3);
      }
      
      
}

function rowSumOddNumbers(n) {
	var start = n * n - n + 1;
  var result = 0;  
  
  for(i = 0; i < n; i++)
  {
    result =  result + (start + (i*2));
  }
    
   return result;
}