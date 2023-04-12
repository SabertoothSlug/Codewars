function squareSum(numbers){
    return numbers.map(x=>x*x).reduce((acc,current)=>acc+current,0)
    }