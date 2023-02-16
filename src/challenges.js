// Desafio 1
const compareTrue = (param1, param2) => {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
};

console.log('Desafio 1:', compareTrue(true, true));

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

console.log('Desafio 2:', calcArea(5, 2));

// Desafio 3
const splitSentence = (string) => string.split(' ');

console.log('Desafio 3:', splitSentence('vamo que vamo'));

// Desafio 4
const concatName = (value) => {
  let lastPosition = value[value.length - 1];
  let firstPosition = value[0];
  let space = ', ';

  return lastPosition + space + firstPosition;
};

console.log('Desafio 4:', concatName(['Gabriel', 'Lucas', 'Bruna']));

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

console.log('Desafio 5:', footballPoints(14, 8));

// Desafio 6
const highestCount = (value) => {
  let result = 0;
  let biggestNumber = Math.max(...value);

  for (let i = 0; i < value.length; i += 1) {
    if (biggestNumber === value[i]) {
      result += 1;
    }
  }
  return result;
};

console.log('Desafio 6:', highestCount([1, 9, 2, 3, 9, 5, 7]));

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let cat1Proximity = Math.abs(mouse - cat1);
  let cat2Proximity = Math.abs(mouse - cat2);
  if (cat1Proximity < cat2Proximity) {
    return 'cat1';
  }
  if (cat2Proximity < cat1Proximity) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

console.log('Desafio 7:', catAndMouse(0, 3, 2));

// Desafio 8
const divisible = (number) => {
  let result;

  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }

  return result;
};

const fizzBuzz = (valueArray) => {
  let result = [];

  for (let i = 0; i < valueArray.length; i += 1) {
    result.push(divisible(valueArray[i]));
  }

  return result;
};

console.log('Desafio 8:', fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
const encode = (valueString) => {
  let stringA;
  let stringE;
  let stringI;
  let stringO;
  let stringU;

  stringA = valueString.replace(/a/gi, 1);
  stringE = stringA.replace(/e/gi, 2);
  stringI = stringE.replace(/i/gi, 3);
  stringO = stringI.replace(/o/gi, 4);
  stringU = stringO.replace(/u/gi, 5);
  valueString = stringU;
  return valueString;
};

const decode = (valueString2) => {
  let string1;
  let string2;
  let string3;
  let string4;
  let string5;

  string1 = valueString2.replace(/1/gi, 'a');
  string2 = string1.replace(/2/gi, 'e');
  string3 = string2.replace(/3/gi, 'i');
  string4 = string3.replace(/4/gi, 'o');
  string5 = string4.replace(/5/gi, 'u');
  valueString2 = string5;
  return valueString2;
};

console.log('Desafio 9:', encode('This is an encoding test'));
console.log('Desafio 9:', decode('Th3s 3s 1n 2nc4d3ng t2st'));

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
