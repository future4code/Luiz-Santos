// Exercícios de interpretação de código

// 1)

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O que o código abaixo está fazendo?
// Fazendo um loop enquanto a variavel i for menor do que 5, e seu valor é somado e atribuido a variavel valor.

// Qual o resultado impresso no console?
// 11

// 2)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// Os números maiores que 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...`
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim, bastaria criar uma variavel auxiliar para servir como indice e
// ir incrementando ela após cada iteração

// 3)
// const quantidadeTotal = Number(prompt('Digite a quantidade de linhas: '));
// let quantidadeAtual = 0;
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = '';
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += '*';
//   }
//   console.log(linha);
//   quantidadeAtual++;
// }

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1)

const imprimeNomeDosPets = () => {
  const totalPets = Number(prompt('Quantos pets vc possui?'));

  if (totalPets === 0) {
    console.log('Que pena! Você pode adotar um pet!');
  }

  let i = 0;
  let arrayPets = [];
  while (i < totalPets) {
    const nomePet = prompt('Qual nome do seu pet?');
    arrayPets.push(nomePet);

    i++;
  }

  console.log(arrayPets);
};

imprimeNomeDosPets();

// 2)

const arrayOriginal = [10, 3, 7, 9, 20, 35, 60, 8, 1, 80];

// a)
const imprimeValoresArray = (array) => {
  for (const num of array) {
    console.log(num);
  }
};

imprimeValoresArray(arrayOriginal);

// b)
const imprimeValoresDivididos = (array) => {
  for (const num of array) {
    const valor = num / 10;
    console.log(valor);
  }
};

imprimeValoresDivididos(arrayOriginal);

// c)
const imprimeNumerosPares = (array) => {
  const novoArray = [];
  for (const num of array) {
    if (num % 2 === 0) {
      novoArray.push(num);
    }
  }

  console.log(novoArray);
};

imprimeNumerosPares(arrayOriginal);

// d)
const imprimeArrayStrings = (array) => {
  const novoArray = [];
  let i = 0;
  for (const num of array) {
    novoArray.push(`O elemento do índex ${i} é: ${num}`);

    i++;
  }

  console.log(novoArray);
};

imprimeArrayStrings(arrayOriginal);

// e)
const imprimeMaiorMenor = (array) => {
  let maior = 0;
  let menor = array[0];
  for (const num of array) {
    if (num > maior) {
      maior = num;
    }

    if (menor > num) {
      menor = num;
    }
  }

  console.log('Maior:', maior, ' Menor:', menor);
};

imprimeMaiorMenor(arrayOriginal);

// Desafios

const adivinheNumero = () => {
  // const numero = Number(prompt('Digite o número que você está pensando?'));
  const numero = Math.floor(Math.random() * 100) + 1; // sugestão do exercicio dois

  console.log('Vamos jogar!');

  let numeroEscolhido;
  let tentativas = 0;

  while (numeroEscolhido !== numero) {
    numeroEscolhido = Number(prompt('Tente acertar o numero'));

    console.log(`O número chutado foi: ${numeroEscolhido}`);

    if (numeroEscolhido > numero) {
      console.log(`Errou, é menor`);
    } else if (numeroEscolhido < numero) {
      console.log(`Errou,  é maior`);
    } else {
      console.log('Acertou!!!');
      console.log(`O número de tetativas foi: ${tentativas}`);
    }
    tentativas++;
  }
};

adivinheNumero();
