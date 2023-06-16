function solve(s) {
  let arr=s.split('')
  const alf={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
  }
  let score=0
  let counter=0
  const regex=/[aeiou]/
  arr.forEach((element,i) => {
    if(regex.test(element)){
        if(counter>score){
            score=counter
        }
        counter=0
    }else{
        counter+=alf[`${element}`]
        if(i==(arr.length-1)){
            if(counter>score){
                score=counter
            }
        }
    }
  });
return score
};
console.log(solve('zodiac'))