function digitalRoot(n) {
    let stringNum=n.toString().split('')
    console.log(stringNum)
    let sump=stringNum.reduce((a,c)=>Number(a)+Number(c),0)
    console.log(sump)
    while (sump>9){
        sump=sump.toString().split('')
        sump=sump.reduce((a,c)=>Number(a)+Number(c),0)
    }
    console.log(sump)
  }
  digitalRoot(16)
//sumbitted code below

function digitalRoot(n) {
    while (n>9){
        n=n.toString().split('')
        n=n.reduce((a,c)=>Number(a)+Number(c),0)
    }
  return n
  }

  