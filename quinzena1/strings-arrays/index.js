// Exercícios de interpretação de código

// let array;
// console.log('a. ', array);
// undefined

// array = null;
// console.log('b. ', array);
// null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log('c. ', array.length);
// 11

// let i = 0;
// console.log('d. ', array[i]);
// 3

// array[i + 1] = 19;
// console.log('e. ', array);
// [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i + 6];
// console.log('f. ', valor);
// 9

//Exercícios de escrita de código

// 1)
const nome = prompt('Qual seu nome?');
const email = prompt('Qual seu email?');

console.log(
  `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`
);

// 2)
const comidasFavoritas = ['arroz', 'feijão', 'macarrão', 'batata-frita', 'ovo'];
console.log(comidasFavoritas);

console.log('Essas são as minhas comidas preferidas: ');
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

const comidaPreferida = prompt('Qual sua comida preferida?');
comidasFavoritas.slice(1, 1);
comidasFavoritas[1] = comidaPreferida;
console.log(comidasFavoritas);

// 3)
const listaTarefas = [];
const tarefa1 = prompt('Qual sua primeira tarefa do dia?');
const tarefa2 = prompt('Qual sua segunda tarefa do dia?');
const tarefa3 = prompt('Qual sua terceira tarefa do dia?');

listaTarefas.push(tarefa1);
listaTarefas.push(tarefa2);
listaTarefas.push(tarefa3);

console.log(listaTarefas);

const i = Number(prompt('Qual o número da tarefa que você já realizou?'));
listaTarefas.slice(i, 1);
console.log(listaTarefas);

//DESAFIOS

const frase = prompt('Digite uma frase');
const array = frase.split('');
console.log(array);

const frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa'];
const indice = frutas.indexOf('Abacaxi');
console.log(indice, frutas.length);
