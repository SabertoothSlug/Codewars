function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
        console.log(`current character is ${currentChar}`)
        console.log(`matches output is ${matches[currentChar]}`)
      } else { // closing braces
        console.log('else loop')
        let test=matches[stack.pop()]
        console.log(`${test}`)
        if (currentChar !== test) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }

  console.log(validBraces("{}({})[]"))

  function validBraces2(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
    return !braces.length;
   }