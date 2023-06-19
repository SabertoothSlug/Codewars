function dupeDetect(arr){
    let test1=[]
    let test2=[]
    let result1=[]
    let result2=[]
    let totes=[]
	arr.forEach((element,i) => {
        test1.push(element(245))
    });
    arr.forEach((element,i) => {
        test2.push(element(255))
    });

    test1.forEach((element,i)=>{
        let check=test1.indexOf(element,i+1)
        if(check>0){
            test1.splice(i,1)
            test1.splice(check,1)
            result1.push(i)
            result1.push(check)
            while(check>0){
                check=test1.indexOf(element,check)
                if(check>0){
                    result1.push(check)
                    test1.splice(check,1)
                }
            }
            totes.push(result1)
            result1=[]
        }
    })
    return totes
}

function dupeDetect(functions) {
    const res = new Map();
    for (const [i, f] of functions.entries()) {
      const k = Array.from({length: 256}, (_, i) => f(i)).join();
      if (!res.has(k))
        res.set(k, []);
      res.get(k).push(i);
    }
    return Array.from(res.values()).filter(is => is.length > 1);
  }

  unction dupeDetect(arr) {
    const map = new Map();
    arr.map((fn, fi) => {
      const out = [];
      for (let i = 0; i < 255; ++i) {
        out.push(fn(i));
      }
      const key = out.join`-`;
      const res = map.get(key) || [];
      res.push(fi);
      map.set(key, res);
    });
    return [...map]
      .map(([key, val]) => val)
      .filter(group => group.length > 1);

      //Meta-Kata: Duplicate Detector v0.1