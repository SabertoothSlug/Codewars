function bouncingBall(h,  bounce,  window) {
    if(h>0&&bounce>0&&bounce<1&&window<h){
        let view=1
        let transition=bounce*h
        while(transition>window){
            transition*=bounce
            view+=2
        }
        return view
    }else{
        return -1
    }
  }