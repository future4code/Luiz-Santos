// Exercícios de interpretação de código

// 1)
// const filme = {
//   nome: 'Auto da Compadecida',
//   ano: 2000,
//   elenco: [
//     'Matheus Nachtergaele',
//     'Selton Mello',
//     'Denise Fraga',
//     'Virginia Cavendish',
//   ],
//   transmissoesHoje: [
//     { canal: 'Telecine', horario: '21h' },
//     { canal: 'Canal Brasil', horario: '19h' },
//     { canal: 'Globo', horario: '14h' },
//   ],
// };

// console.log(filme.elenco[0]);
// console.log(filme.elenco[filme.elenco.length - 1]);
// console.log(filme.transmissoesHoje[2]);

// a) O que vai ser impresso no console?

// "Matheus Nachtergaele"
// "Virginia Cavendish"
// {canal: "Globo", horario: "14h"}

// 2)

// const cachorro = {
//   nome: 'Juca',
//   idade: 3,
//   raca: 'SRD',
// };

// const gato = { ...cachorro, nome: 'Juba' };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll('a', 'o') };

// console.log(cachorro);
// console.log(gato);
// console.log(tartaruga);

// a) O que vai ser impresso no console?

// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Espalha o objeto cachorro dentro do objeto gato
// e espalha o objeto gato dentro do objeto tartaruga

// 3)

// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade];
// }

// const pessoa = {
//   nome: 'Caio',
//   idade: 23,
//   backender: false,
// };

// console.log(minhaFuncao(pessoa, 'backender'));
// console.log(minhaFuncao(pessoa, 'altura'));

// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/**
 Esses valores foram impressos no console porque a função minhaFuncao()
 retorna o valor da propriedade de um objeto.
 No primeiro console retornou false porque existe uma propriedade chamada backender no objeto pessoa,
 já no segundo retornou undefined porque não existe a propriedade altura no objeto pessoa.
 */

// Exercícios de escrita de código

// 1)

// a)

const pessoa = {
  nome: 'Amanda',
  apelidos: ['Amandinha', 'Mandinha', 'Mandi'],
};

const imprimeMensagem = (obj) =>
  console.log(
    `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
  );

imprimeMensagem(pessoa);

const novaPessoa = {
  ...pessoa,
  apelidos: ['Dinha', 'Mendy', 'Mindinha'],
};

imprimeMensagem(novaPessoa);

// 2)

const dev1 = {
  nome: 'Luiz',
  idade: 34,
  profissao: 'Desenvolvedor Front-End',
};

const dev2 = {
  nome: 'Gustavo',
  idade: 34,
  profissao: 'Desenvolvedor Back-End',
};

const imprimeArray = (obj1, obj2) => [
  obj1.nome,
  obj1.nome.length,
  obj1.idade,
  obj1.profissao,
  obj1.profissao.length,
  obj2.nome,
  obj2.nome.length,
  obj2.idade,
  obj2.profissao,
  obj2.profissao.length,
];

console.log(imprimeArray(dev1, dev2));

// 3)

const carrinho = [];

const preencheCarrinho = (obj1, obj2, obj3) => {
  carrinho.push(obj1, obj2, obj3);
};

const fruta1 = {
  nome: 'Mamão',
  disponibilidade: true,
};

const fruta2 = {
  nome: 'Abacate',
  disponibilidade: true,
};

const fruta3 = {
  nome: 'Laranja',
  disponibilidade: true,
};

preencheCarrinho(fruta1, fruta2, fruta3);
console.log('Carrinho', carrinho);

// DESAFIOS

// 1)

const capturaDadosUsuario = () => {
  const nome = prompt('Qual o seu nome?');
  const idade = prompt('Qual a sua idade?');
  const profissao = prompt('Qual a sua profissão?');

  const usuario = {
    nome,
    idade,
    profissao,
  };

  console.log(usuario, typeof usuario);
};

capturaDadosUsuario();

// 2)

const comparaDataLancamento = (obj1, obj2) => {
  return `O primeiro filme foi lançado antes do segundo? ${
    obj1.anoLancamento < obj2.anoLancamento
  }
  O primeiro filme foi lançado no mesmo ano do segundo? ${
    obj1.anoLancamento === obj2.anoLancamento
  }`;
};

const filme1 = {
  nome: 'Matrix',
  anoLancamento: 2000,
};

const filme2 = {
  nome: 'Hary Potter',
  anoLancamento: 2003,
};

console.log(comparaDataLancamento(filme1, filme2));

// 3)

const inverteDisponibilidade = (fruta) => {
  fruta.disponibilidade = !fruta.disponibilidade;

  return fruta;
};

console.log(inverteDisponibilidade(fruta2));
