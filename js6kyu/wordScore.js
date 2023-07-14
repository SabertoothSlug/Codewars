function high(x){
let words=x.split(' ')
let scores=[]
 scores=words.map((element)=>{
    let c=0
    let leng=element.length
    for(let v=0;v<leng;v++){
        c+=element.charCodeAt(v)-96
    }
    return Number(c)
})
let top=scores.reduce((a, b) => Math.max(a, b), -Infinity);
let indy=scores.indexOf(top)
return words[indy]
}

high('what time are we climbing up the volcano')