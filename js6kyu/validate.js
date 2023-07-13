function validate(n){
    n=n.toString().split('')
    let size = n.length
    let relay=true
    let m
    if(size%2!=0){
        relay=false
    }
    m=n.map((element)=>{
        if(relay){
            relay=false
            if(element>4){
                return element*2-9
            }else{
                return element*2
            }    
        }else{
                relay=true
                return element*1
        }
    })
    if((m.reduce((a,c)=>a+c,0))%10===0){
        return true
    }else{return false}
}