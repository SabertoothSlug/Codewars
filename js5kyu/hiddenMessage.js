// var string = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.',
//     ans = 'The mission has been done. On hold for further instructions.';



function foundationMessage(message) {
    let mess=message.replaceAll('!','.')
    mess=mess.replaceAll('?','.')
    mess=mess.replaceAll(',','')
    mess=mess.replaceAll('"','')
    
    let code=mess.split('. ')
    let cypher=code[0].split(' ')
    console.log(code)
    console.log(cypher)
    let rez=[]
    let totes=[]
    for(let r=1;r<=cypher.length;r++){
        let pointer=cypher[r-1].length
        let subCode=code[r].split(' ')
        rez.push(subCode[pointer-1])
    }
    totes=rez.join(' ').concat('.')
    let first=totes.charAt(0)
    console.log(rez)
    console.log(first)
    console.log(totes)
}
foundationMessage('Yesterday, we bumped into Laura? It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that! It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.')