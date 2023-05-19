function solution(number){ 
    number=number-1
    let totes=0
    const remFive=number%5
    const remThree=number%3
    let fiveCount=number - remFive
    let threeCount=number - remThree
    while(fiveCount>0){
        if(fiveCount%3==0){
            fiveCount=fiveCount-5

        }else{
            totes=totes+fiveCount
            console.log(fiveCount)
            fiveCount=fiveCount-5

        }
    }
    while(threeCount>0){
        totes=totes+threeCount
        console.log(threeCount)
        threeCount=threeCount-3
    }
    return totes
}

solution(10)