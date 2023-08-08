function chmodCalculator(perm) {
regex=/[a-z]/
let useNum=0
let grupNum=0
let othNum=0
if(perm.user){
    let use=perm.user.split('')
    for(let i=0;i<3;i++){
        if(regex.test(use[i])&&i==0){
            useNum+=4
        }
        if(regex.test(use[i])&&i==1){
            useNum+=2
        }
        if(regex.test(use[i])&&i==2){
            useNum+=1 
        }
    }

}
if(perm.group){
    let grup=perm.group.split('')
    for(let i=0;i<3;i++){
        if(regex.test(grup[i])&&i==0){
            grupNum+=4
        }
        if(regex.test(grup[i])&&i==1){
            grupNum+=2
        }
        if(regex.test(grup[i])&&i==2){
            grupNum+=1
        }
    }
    
}
if(perm.other){
    let oth=perm.other.split('')
    for(let i=0;i<3;i++){
        if(regex.test(oth[i])&&i==0){
            othNum+=4
        }
        if(regex.test(oth[i])&&i==1){
            othNum+=2
        }
        if(regex.test(oth[i])&&i==2){
            othNum+=1
        }
    }
    
}
return (""+useNum+grupNum+othNum)

}
chmodCalculator({user: 'rwx', group: 'r-x', other: 'r-x'})

function chmodCalculator(perm) {
    let octal = p => !p ? 0 : 
      4 * +(p[0] === 'r') + 
      2 * +(p[1] === 'w') + 
      1 * +(p[2] === 'x')
    
    return '' + octal(perm.user) + octal(perm.group) + octal(perm.other); 
  }

  function chmodCalculator(perm) {
    dict = { 'r': 4, 'w': 2, 'x':1, '-':0 };
   
    u = 0, g = 0, o = 0;
    if( 'user' in perm )
    u = dict[ perm['user' ][0] ] + dict[ perm['user' ][1] ] + dict[ perm['user' ][2] ];
    if( 'group' in perm )
    g = dict[ perm['group'][0] ] + dict[ perm['group'][1] ] + dict[ perm['group'][2] ];
    if( 'other' in perm )
    o = dict[ perm['other'][0] ] + dict[ perm['other'][1] ] + dict[ perm['other'][2] ];
  
    return u.toString() + g.toString() + o.toString();
  }