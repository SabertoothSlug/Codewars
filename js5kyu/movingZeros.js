

//-----------Comented codes doesn't work because its modifying as it's working and it gets messy.
// function moveZeros(arr) {
//     let count=0
//     arr.forEach((element,i)=>{
//         if(element===0){
//             arr.splice(i,1)
//             count++
//             i--
//         }
//     })
//     for(let z=0;z<count;z++){
//     arr.push(0)
//     }
//     return arr
//   }


// filter for the win
function moveZeros(arr) {
    arrZero=arr.filter(numb=>numb===0)
    arrNumbs=arr.filter(numb=>numb!==0)
    return arrNumbs.concat(arrZero) 
   }