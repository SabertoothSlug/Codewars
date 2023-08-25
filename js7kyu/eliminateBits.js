function eliminateUnsetBits(number) {
    regex=/0/g
    return parseInt(number,2)? parseInt(number.replace(regex,''),2):0
  }