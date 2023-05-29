function getPINs(observed) {
    let arr=observed.split('')
    console.log(arr)
    let count=arr.length
    let arrOpt=[]
    result=[]
    arr.forEach((element,i) => {
        switch(element) {
            case '1': 
            arr1[i]=['1','2','4'] 
            break;
            case '2': 
            arr1[i]=['2','1','3','5'] 
            break;
            case '3': 
            arr1[i]=['3','2','6'] 
            break;
            case '4': 
            arr1[i]=['4','1','5','7'] 
            break;
            case '5': 
            arr1[i]=['5','2','4','6','8'] 
            break;
            case '6': 
            arr1[i]=['6','3','5','9'] 
            break;
            case '7': 
            arr1[i]=['7','4','8'] 
            break;
            case '8': 
            arr1[i]=['8','5','7','9','0'] 
            break;
            case '9': 
            arr1[i]=['9','6','8'] 
            break;
            case '0': 
            arr1[i]=['0','8'] 
            break;
            default: console.log('error')
        }
        
        })
        console.log(arrOpt[0][1])
        for(let m=0;m<count;m++){
            for(let n=0;n<arrOpt[m].length){

            }

        }
    }
    getPINs('115')

    function getPINs(observed) {
        return observed.split('')
        .map( t => ({
              '0': [ '0', '8' ],
          '1': [ '1', '2', '4' ],
          '2': [ '1', '2', '3', '5' ],
          '3': [ '2', '3', '6' ],
          '4': [ '1', '4', '5', '7' ],
          '5': [ '2', '4', '5', '6', '8' ],
          '6': [ '3', '5', '6', '9' ],
          '7': [ '4', '7', '8' ],
          '8': [ '5', '7', '8', '9', '0' ],
          '9': [ '6', '8', '9' ]
        }[t]))
        .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
      }