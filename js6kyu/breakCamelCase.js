// complete the function
function solution(string) {
let regex=/[a-z][A-Z]/
while(regex.test(string)){
    let i=string.search(regex)
    console.log(string.search(regex))
    string=string.slice(0,i+1)+' '+string.slice(i+1,string.length+1)
}
return string
}
console.log(solution('camelCasingTest'))
