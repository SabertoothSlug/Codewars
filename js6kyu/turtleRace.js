function race(v1, v2, g) {
    if(v1>=v2){
        return null
    }else{
        let diff=g/(v2-v1)
    const hr=Math.floor(diff)
    diff=((diff-hr)*60)+(0.0001)
    const min=Math.floor(diff)
    const sec=Math.floor((diff-min)*60)
    return [hr,min,sec]
    }
}