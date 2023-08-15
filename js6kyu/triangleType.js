/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
let arr=[a,b,c].sort(compareFn)
let type=(arr[0]*arr[0])+(arr[1]*arr[1])
if((arr[2]*arr[1]*arr[0])==0){
    return 0
}else if(type==(arr[2]*arr[2])){
    return 2
}else if(type>(arr[2]*arr[2])){
return 1
}else if(arr[2]>=arr[1]+arr[0]){
return 0
}else{
    return 3}  
}

function compareFn(a,b){
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else{
        return 0
    }
}

console.log(triangleType(7, 3, 2))

function triangleType(a, b, c){
    var result = triangleType.ACUTE,
        sides = [a,b,c].sort(function(a,b){return a-b});
    
    a = sides[0], b = sides[1], c = sides[2];
    
    if(a <= c - b) {
      result = triangleType.INVALID;
      
    } else if(c*c === a*a + b*b) {
      result = triangleType.RIGHT;
      
    } else if(c*c > a*a + b*b) {
      result = triangleType.OBTUSE;
    }
    
    return result;
  }
  
  triangleType.INVALID = 0;
  triangleType.ACUTE = 1;
  triangleType.RIGHT = 2;
  triangleType.OBTUSE = 3;