//Exercícios de interpretação de código

// function minhaFuncao(variavel) {
//   return variavel * 5;
// }

// console.log(minhaFuncao(2));
// console.log(minhaFuncao(10));

// a) O que vai ser impresso no console?
// 10
// 50

// b) O que aconteceria se retirasse os dois console.log
// e simplesmente invocasse a função minhaFuncao(2)
// e minhaFuncao(10)? O que apareceria no console?

// Não seria mostrado nada no console

// let textoDoUsuario = prompt('Insira um texto');

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes('cenoura');
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);

// a. Explique o que essa função faz e qual é sua utilidade
// A função verifica se no texto digitado existe a palavra cenoura
// e retorna true ou false

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   Eu gosto de cenoura // true
//      ii.  CENOURA é bom pra vista // true
//      iii. Cenouras crescem na terra // false

// Exercícios de escrita de código

// 1)

// a)
const mostrarMensagem = () =>
  console.log(
    'Eu sou Luiz Gustavo, tenho 34 anos, moro em Santo Antônio do Amparo e sou estudante.'
  );

mostrarMensagem();

// b)
const exibirInformacoesUsuario = (nome, idade, endereco, profissao) => {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`;
};

const inputnome = prompt('Qual o seu nome');
const inputidade = prompt('Qual a sua idade');
const inputendereco = prompt('Qual o seu endereco');
const inputprofissao = prompt('Qual a sua profissao');

console.log(
  exibirInformacoesUsuario(inputnome, inputidade, inputendereco, inputprofissao)
);

// 2)

// a)
const somaDoisNumeros = (numero1, numero2) => numero1 + numero2;
console.log(somaDoisNumeros(3, 5));

// b)
const verificaNumerosIguais = (numero1, numero2) => numero1 >= numero2;
console.log(verificaNumerosIguais(3, 5));

// c)
const verificaNumeroPar = (numero) => numero % 2 === 0;
console.log(verificaNumeroPar(3));

// d)
const imprimeTamanhoMensagem = (message) =>
  console.log(message.length, message.toUpperCase());

imprimeTamanhoMensagem('Minha mensagem legal');

// 3)

const soma = (numero1, numero2) => numero1 + numero2;
const subtracao = (numero1, numero2) => numero1 - numero2;
const multiplicacao = (numero1, numero2) => numero1 * numero2;
const divisao = (numero1, numero2) => numero1 / numero2;

const inputNumero1 = Number(prompt('Digite um numero'));
const inputNumero2 = Number(prompt('Digite outro numero'));

console.log('Números inseridos', inputNumero1, 'e', inputNumero2);
console.log('Soma', soma(inputNumero1, inputNumero2));
console.log('Diferença', subtracao(inputNumero1, inputNumero2));
console.log('Multiplicação', multiplicacao(inputNumero1, inputNumero2));
console.log('Divisão', divisao(inputNumero1, inputNumero2));

// DESAFIOS

// 1)
const imprimeValor = (valor) => console.log(valor);

const somaNumeros = (num1, num2) => num1 + num2;

imprimeValor(somaDoisNumeros(3, 7));

// 2)
const calculaTeoremaPitagoras = (a, b) => {
  const somaDosCatetos = a ** 2 + b ** 2;
  const hipotenusa = Math.sqrt(somaDosCatetos);

  return hipotenusa;
};

console.log(calculaTeoremaPitagoras(2, 2));
