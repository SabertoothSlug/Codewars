function climbingStairs(cost) {
   let position=0
   let totes=0
   while (position<cost.length){
    if(cost[position+2]===undefined){
        totes+=cost[position]
        position+=2    
    }else if(cost[position+1]+1<cost[position+2]){
        totes+=cost[position]
        position++
    }else{
        totes+=cost[position]
        position+=2
    }
   }
   return totes
  }

  function climbingStairs(cost) {
    let a = 0, b = 0;
    for (const x of cost) {
      [a, b] = [b, x + Math.min(a, b)];
    }
    return Math.min(a, b);
  }

  function climbingStairs(cost) {
    // refactor without storing an array of all costs
    let two = cost[cost.length-1] // very last step
    let one = cost[cost.length-2]
    
    // record the cost from the current step to the end
    // we know the cost for the last two steps immediately then by working backwards
    // each earlier step will know the lowest cost by comparing the next two steps
    for (let i=cost.length-3; i>=0; i--) {   
      [one, two] = [cost[i] + Math.min(one, two), one] // one becomes the cost of the current step, one swaps to two
    }
    return Math.min(one, two)
  }