function alphabetPosition(text) {
    regex=/[a-z]/
    let filt=text.toLowerCase().split('').filter(check=> regex.test(check))
    let result=''
    filt.forEach(element => {
        result+=((element.charCodeAt(0)-96))+' '
    });
    console.log(result)
    
        result=result.trim()
    
    return result
  }
  alphabetPosition('6/0#9&%9')