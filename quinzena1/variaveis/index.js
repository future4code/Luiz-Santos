// Exercícios de interpretação de código

// Resposta do exercício 1
// 10, 5

// Resposta do exercício 2
// 10, 10, 10

// Resposta do exercício 3
// sugestão nome primeira variavel = horasTrabalhadasPorDia
// sugestão nome segunda variavel = totalGanhoPorDia

//////////////////////////////////////////////////////////////////////////////////////////

// Exercícios de escrita de código

// 1 - Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

// g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

nome = prompt('Qual o seu nome?');
idade = prompt('Qual a sua idade?');

console.log(
  'Olá',
  nome,
  'você tem',
  idade,
  'anos.',
  'Onde',
  nome,
  'e',
  idade,
  'são os valores que você inseriu'
);

// 2 - Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

// a) Crie três novas variáveis, contendo as respostas

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
// Você está usando uma roupa azul hoje? - SIM

const pergunta1 = 'Choveu hoje?';
const pergunta2 = 'Você trabalha?';
const pergunta3 = 'Você estuda?';

const repostaPergunta1 = prompt(pergunta1);
const repostaPergunta2 = prompt(pergunta2);
const repostaPergunta3 = prompt(pergunta3);

console.log(pergunta1, repostaPergunta1);
console.log(pergunta2, repostaPergunta2);
console.log(pergunta3, repostaPergunta3);

// 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

//     let a = 10
//     let b = 25
//     Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.

//     Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

//     let a = 10
//     let b = 25

//     // Aqui faremos uma lógica para trocar os valores

//     // Depois de trocados, teremos o seguinte resultado:
//     console.log("O novo valor de a é", a) // O novo valor de a é 25
//     console.log("O novo valor de b é", b) // O novo valor de b é 10

let a = 10;
let b = 25;

let c;

c = a;
a = b;
b = c;

console.log('O novo valor de a é', a); // O novo valor de a é 25
console.log('O novo valor de b é', b); // O novo valor de b é 10
