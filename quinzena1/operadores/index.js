//Exercícios de interpretação de código

// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2;

// let resultado = bool1 && bool2;
// console.log('a. ', resultado);
// retorna false

// resultado = bool1 && bool2 && bool3;
// console.log('b. ', resultado);
// retorna false

// resultado = !resultado && (bool1 || bool2);
// console.log('c. ', resultado);
// retorna true

// console.log('d. ', typeof resultado);
// boolean

//Exercícios de escrita de código

// 1)
const idade = Number(prompt('Qual a sua idade?'));
const idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'));

console.log(
  'Sua idade é maior do que a do seu melhor amigo?',
  idade > idadeAmigo
);
console.log('Diferença de idade', idade - idadeAmigo);

// 2)

const numPar = Number(prompt('Digite um número par?'));
const restoDivisao = numPar % 2;

console.log('Resto da divisão: ', restoDivisao);
// Todos os números pares divididos por 2 o resto da divisão será 0

// 3)

const idadeEmAnos = Number(prompt('Qual a sua idade?'));

const idadeEmMeses = idadeEmAnos * 12;
const idadeEmDias = idadeEmAnos * 365;
const idadeEmHoras = idadeEmDias * 24;

console.log('Sua idade em meses: ', idadeEmMeses);
console.log('Sua idade em dias: ', idadeEmDias);
console.log('Sua idade em horas: ', idadeEmHoras);

// 4)

const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Digite outro número'));

console.log('O primeiro numero é maior que segundo?', num1 > num2);
console.log('O primeiro numero é igual ao segundo?', num1 === num2);
console.log('O primeiro numero é divisível pelo segundo?', num1 % num2 === 0);
console.log('O segundo numero é divisível pelo primeiro?', num2 % num1 === 0);
