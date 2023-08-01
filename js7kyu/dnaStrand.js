function DNAStrand(dna){
    const convert = {
        A : 'T' ,
        T : 'A',
        C : 'G',
        G : 'C'
    }
    let ant = ''
    dna.split('').forEach(element => {
        ant+=convert[element]
    });
    return ant
  }

  function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }