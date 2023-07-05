function alphabetPosition(text) {
    regex=/[a-z]/
    let filt=text.toLowerCase().split('').filter(check=> regex.test(check))
    let result=''
    filt.forEach(element => {
        result+=((element.charCodeAt(0)-96))+' '
    });
    return result.trim()
  }
  alphabetPosition('6/0#9&%9')