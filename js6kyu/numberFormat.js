var numberFormat = function (number) {
    let arr=number.toString().split('')
    for(let v=arr.length-3;v>0;v-=3){
        if(arr[v-1]!='-'){
            arr.splice(v,0,',')
        }
        
    }
    return arr.join('')
  };

  numberFormat = n => n.toLocaleString()

  const numberFormat = number =>
  String(number).replace(/\B(?=(\d{3})+\b)/g, `,`);