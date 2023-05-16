var countBits = function(n) {
    return n.toString(2).split('').reduce((a,c)=>Number(a)+Number(c),0)

  };
  console.log(countBits(10))