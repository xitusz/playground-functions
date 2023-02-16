// Desafio 10
const techList = (array, name) => {
  let result = [];

  const sortedArray = array.sort();

  if (array.length === 0) return 'Vazio!';

  for (let i = 0; i < sortedArray.length; i += 1) {
    result.push({ tech: sortedArray[i], name });
  }

  return result;
};

console.log('Desafio 10:', techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Gabriel'));

// Desafio 11
const phoneNumber = (array) => {
  const ddd = `(${array[0]}${array[1]})`;
  const first = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const second = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  const number = `${ddd} ${first}-${second}`;

  return number;
};

const generatePhoneNumber = (array) => {
  let count = 0;

  if (array.length !== 11) return 'Array com tamanho incorreto.';

  for (let i = 0; i < array.length; i += 1) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[i] === array[index]) count += 1;
    }

    if (array[i] < 0 || array[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    count = 0;
  }

  return phoneNumber(array);
};

console.log('Desafio 11:', generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
const triangleCheck = (A, B, C) => {
  let result = false;

  if (A < (B + C) && A > (B - C)) return true;

  return result;
};

console.log('Desafio 12:', triangleCheck(10, 14, 8));

// Desafio 13
const hydrate = (string) => {
  let numbers = string.match(/\d/g);
  let total = 0;
  let result = '';

  for (let i = 0; i < numbers.length; i += 1) {
    total += parseInt(numbers[i], 10);
  }

  if (total === 1) {
    result = `${total} copo de água`;
  } else {
    result = `${total} copos de água`;
  }

  return result;
};

console.log('Desafio 13:', hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
