// function solution(nums){
//     if(nums){return nums.sort((a,b)=>a-b)
//     }else{
//         return []
//     }
// }


let bank=[4,44,10,1,5,9]
let test=null
let test2=[]
console.log(bank)
console.log(solution(bank))
console.log(solution(test))
console.log(solution(test2))

function solution(nums){
   return nums?nums.sort((a,b)=>a-b): [];
    }
