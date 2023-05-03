decodeMorse = function(morseCode){
    let words=morseCode.split('  ')
    let answer=[]
    words.forEach(element => {
        let letters=element.split(' ')
        letters.forEach(element => {
            answer.push(MORSE_CODE[element])
        });
        answer.push(' ')
    });
    return answer.join('').trim()
  }
console.log(decodeMorse('···· · −·−−   ·−−− ··− −·· ·'))