function shortcut (string) {
    let arr=string.split('')
    let arr2=arr.map((element,i)=>{
        if(element!='a'&&element!='e'&&element!='i'&&element!='o'&&element!='u'){
            return element
        }
    })
    return arr2.join('');
  }

  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }