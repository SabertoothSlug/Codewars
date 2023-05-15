function duplicateEncode(word){
    let letter=word.split('').map(x=>x.toLowerCase())
    console.log(letter)
    let encode=''
    letter.forEach(element => {
        let check=letter.indexOf(element)
        let check2=letter.indexOf(element,(check+1))
        console.log(check2)
        if (check2>0){
            encode=encode+')'
        }else{
            encode=encode+'('
        }
    });
    return encode
}
console.log(duplicateEncode('dnng'))
