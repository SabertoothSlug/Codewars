function twoSum(numbers, target) {
    for(let i=0;i<numbers.length;i++){
        const diff=target-numbers[i]
        const diffIn=numbers.indexOf(diff,i+1)
        if (diffIn!==-1){
            return [i,diffIn]
        }
    }
  }