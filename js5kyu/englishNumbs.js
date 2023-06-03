const numberToEnglish = n => {
    let stringy=n.toString().split('')
    console.log(stringy)
    let result=''
    const match={
        '1':'one',
        '2':'two',
        '3':'three',
        '4':'four',
        '5':'five',
        '6':'six',
        '7':'seven',
        '8':'eight',
        '9':'nine'
    };
    while(stringy.length!=0){
        switch(stringy.length){
            case 1:
                console.log('One digit')
                result=match[stringy[0]]+result
                stringy.pop()
                break;
            case 2:
                console.log('Two digit')
                result=match[stringy[1]]+result
                stringy.pop()
                break;
            case 3:
                console.log('Three digit')
                result=match[stringy[2]]+' hundred '+result
                console.log(result)
                stringy.pop()
                break;
        }
    }
    

    console.log(`The answer is ${result}`)
}

numberToEnglish(456)