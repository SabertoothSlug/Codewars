function dirReduc(arr){
    let clear=false
    let count=0
    while(!clear){
        arr.forEach((element,i)=>{
            if(i<(arr.length-1)){
            if((element.toLowerCase()=='west'&&arr[i+1].toLowerCase()=='east')||(element.toLowerCase()=='east'&&arr[i+1].toLowerCase()=='west')||(element.toLowerCase()=='north'&&arr[i+1].toLowerCase()=='south')||(element.toLowerCase()=='south'&&arr[i+1].toLowerCase()=='north')){
                arr.splice(i,2)
                count++
            }}
        })
        if(count==0){
            clear=true
        }else{
            count=0
        }
    }
    return arr
  }
  
  console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))