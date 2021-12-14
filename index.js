const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split(/\r?\n/);
  let cardinality = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // print all lines
  lines.forEach((line) => {
    let bits = line.split("");
    bits.forEach((bit, index) => {
      if (Number(bit) === 0) {
        cardinality[index]--;
      } else {
        cardinality[index]++;
      }
    })
  });
  let gammaRate = cardinality.map(rate => rate > 0 ? 1 : 0);
  let gammaString = '';
  gammaRate.forEach((bit) => { 
    gammaString += bit.toString();
  });
  let epsilonRate = cardinality.map(rate => rate > 0 ? 0 : 1);
  let epsilonString = '';
  epsilonRate.forEach((bit) => { 
    epsilonString += bit.toString();
  });
  console.log(gammaString);
  console.log(epsilonString);
  let gammaValue = parseInt(gammaString, 2)
  let epsilonValue = parseInt(epsilonString, 2)
  console.log(`Advent of code day 3 part a: ${gammaValue * epsilonValue}`);
})