// Desafio 1
function compareTrue(one, two) {
  return one && two;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repeat = 1;
  for (let i = 1; i < array.length; i += 1) {
    if (maior === array[i]) {
      repeat += 1;
    }
    if (maior < array[i]) {
      maior = array[i];
      repeat = 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1d = Math.abs(mouse - cat1);
  let cat2d = Math.abs(mouse - cat2);
  if (cat1d < cat2d) return 'cat1';
  if (cat1d > cat2d) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  const result = numbers.map((number) => {
    if (number % 15 === 0) return 'fizzBuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return result;
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
