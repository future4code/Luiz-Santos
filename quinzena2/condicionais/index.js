// Exercícios de interpretação de código

// 1)

// const respostaDoUsuario = prompt('Digite o número que você quer testar');
// const numero = Number(respostaDoUsuario);

// if (numero % 2 === 0) {
//   console.log('Passou no teste.');
// } else {
//   console.log('Não passou no teste.');
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
// Recebe um número digitado pelo usuário e verifica se o nímero é par ou não

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Números ímpares

// 2)

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// Para comparar o valor digitado pelo usuario e adicionar um valor a variavel de acordo
// com o nome da fruta digitada pelo usuario, caso o valor não atenda a nenhuma das
// condições por padrão o valor atribuido a variavel preço será 5.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é R$2.25

// c) Considere que um usuário queira comprar uma `Pêra`,
// qual seria a mensagem impressa no console se retirássemos o `break`
// que está logo acima do `default`
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// O preço da fruta Pêra é R$5.5
// O preço da fruta Pêra é R$5

// 3)

// const numero = Number(prompt('Digite o primeiro número.'));

// if (numero > 0) {
//   console.log('Esse número passou no teste');
//   let mensagem = 'Essa mensagem é secreta!!!';
// }

// console.log(mensagem);

// a) O que a primeira linha está fazendo?
// Pegando o valor digitado no prompt e atribuindo a variavel numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
// // Esse número passou no teste

// E se fosse o número -10?
// Retornaria um erro

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, pois variaveis declaradas com let e const possuem escopo de bloco e de função.

// Exercícios de escrita de código

// 1)
const idadeUsuario = Number(prompt('Qual a sua idade?'));

const verificaIdade = (idade) => {
  if (idade >= 18) {
    console.log('Você pode dirigir');
  } else {
    console.log('Você não pode dirigir');
  }
};

verificaIdade(idadeUsuario);

// 2)

const turno = prompt(
  'Em qual turno você estuda? Digite M, N ou V'
).toUpperCase();

const verificaTurno = (turno) => {
  if (turno === 'M') {
    console.log('Bom dia!');
  } else if (turno === 'V') {
    console.log('Boa tarde!');
  } else if (turno === 'N') {
    console.log('Boa noite!');
  } else {
    console.log('Esse turno não existe.');
  }
};

verificaTurno(turno);

// 3)

const verificaTurnoSwitch = (turno) => {
  switch (turno) {
    case 'M':
      console.log('Bom dia!');
      break;
    case 'V':
      console.log('Boa tarde!');
      break;
    case 'N':
      console.log('Boa noite!');
      break;
    default:
      console.log('Esse turno não existe.');
      break;
  }
};

verificaTurnoSwitch(turno);

// 4)

const verificaPrecoIngresso = () => {
  const generoFilme = prompt(
    'Qual o gênero do filme vocês vão assistir?'
  ).toLocaleLowerCase();
  const precoIngresso = Number(prompt('Qual o preço do ingresso?'));

  if (generoFilme === 'fantasia' && precoIngresso < 15) {
    const lanche = prompt(' qual lanchinho você vai comprar?'); // impelementação proposta no desafio
    console.log('Bom filme!');
    console.log(`Aproveite seu ${lanche}`); // impelementação proposta no desafio
  } else {
    console.log('Escolha outro filme :(');
  }
};

verificaPrecoIngresso();

// Desafios

const TABELAPRECO = {
  1: {
    sf: 1320,
    dt: 660,
    fi: 1980,
  },

  2: {
    sf: 880,
    dt: 440,
    fi: 1320,
  },

  3: {
    sf: 550,
    dt: 330,
    fi: 880,
  },

  4: {
    sf: 220,
    dt: 170,
    fi: 330,
  },
};

const imprimeMensagem = (
  nome,
  tipoJogo,
  categoria,
  qtdIngressos,
  valorIngresso,
  valorTotal
) => {
  console.log('---Dados da compra----');
  console.log(`Nome do Cliente: ${nome}`);
  console.log(`Tipo do jogo: ${tipoJogo.toUpperCase()}`);
  console.log(`Categoria: ${categoria}`);
  console.log(`Quantidade de Ingressos: ${qtdIngressos} ingressos`);
  console.log('---Valores----');
  console.log(`Valor do ingresso: R$ ${valorIngresso}`);
  console.log(`Quantidade de Ingressos: R$ ${valorTotal}`);
};

const calculaValorDaCompra = () => {
  const nomeCompleto = prompt('Digite seu nome completo');
  const tipoJogo = prompt(
    'Digite o tipo do jogo, Internacional ou Nacional'
  ).toLocaleLowerCase();
  const etapaJogo = prompt(
    'Digite a etapa do jogo: SF para semi-final, DT terceiro lugar, FI final'
  ).toLocaleLowerCase();
  const categoria = prompt('Digite a categoria 1, 2, 3 ou 4');
  const qtdIngressos = Number(prompt('Digite a quantidade de ingressos'));

  const precoDolar = 4.1;
  const valorIngresso = TABELAPRECO[categoria][etapaJogo];
  const valorTotalInternacional = valorIngresso * qtdIngressos * precoDolar;
  const valorTotalNacional = valorIngresso * qtdIngressos;

  if (tipoJogo === 'internacional') {
    switch (etapaJogo) {
      case 'sf':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalInternacional
        );
        break;
      case 'dt':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalInternacional
        );
        break;

      case 'fi':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalInternacional
        );
        break;

      default:
        console.log('Os dados inseridos estão incorretos');
        break;
    }
  } else {
    switch (etapaJogo) {
      case 'sf':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalNacional
        );
        break;
      case 'dt':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalNacional
        );
        break;

      case 'fi':
        imprimeMensagem(
          nomeCompleto,
          tipoJogo,
          categoria,
          qtdIngressos,
          valorIngresso,
          valorTotalNacional
        );
        break;

      default:
        console.log('Os dados inseridos estão incorretos');
        break;
    }
  }
};

calculaValorDaCompra();
