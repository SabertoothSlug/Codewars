function switchDict(dic) {
let values=Object.values(dic)
let keys=Object.keys(dic)
console.log(keys)
let position=0
for(let i=0;position<dic.length;i++){
    let holder = values[position]

}
values.forEach((element,i)=>{
    dic{element}
})
}

switchDict({'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'})

function switchDict(dic) {
    let keys = [...new Set(Object.keys(dic))];
    const dic2 = {};
    
    keys.forEach( i => dic2[dic[i]] ? dic2[dic[i]].push(i) : dic2[dic[i]] = [i] )
    
    return dic2
  }

  function switchDict(dic) {
    return Object.entries(dic).reduce((acc, [key, value]) => {
      if (!acc[value]) acc[value] = [];
      acc[value].push(key);
      return acc;
    }, {});
  }