String.prototype.toAlternatingCase = function () {
    const regex1=/[A-Z]/
    const regex2=/[a-z]/
    let array=this.split('').forEach(element=>{
        if(regex1.test(element)){
            return element.toLowerCase()
        }else if(regex2.test(element)){
            return element.toUpperCase()               
        }else {
            return element
        }
    })
    return array.join('')
  }

  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
// baldurs gate 3 came out