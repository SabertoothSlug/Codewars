function toString(convertable){
    let convert=''
  switch(convertable){
    case true:
        convert='true';
        break;
    case false:
        convert='false';
        break;
    case (typeof convertable)=='number':
    convert=
  }
  
    return convert
  }

  Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }

Number.prototype.toString = function() {return "" + this;}
Array.prototype.toString = function() {return "[" + this.join(",") + "]";}
Boolean.prototype.toString = function() {return "" + this;}
Object.prototype.toString = function() {return "" + this;}

Boolean.prototype.toString=function(){return `${this}`};
Number.prototype.toString=function(){return `${this}`};
Array.prototype.toString=function(){return `[${this.map(x=>`${x}`).join(',')}]`};