// Exercícios de interpretação de código

// 1)

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a) O que vai ser impresso no console?

// Vai ser impresso o item, o index e o array original

// 2)

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

// a) O que vai ser impresso no console?
// Vai ser imresso um novo array somente com os nomes.

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Um novo array com os apelidos que são diferentes de Chijo

// Exercícios de escrita de código

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' },
];

// a)
const nomeDosPets = pets.map((pet) => pet.nome);
console.log(nomeDosPets);

// b)
const petsSalsicha = pets.filter((pet) => pet.raca === 'Salsicha');
console.log(petsSalsicha);

// c)
const arrayMensagens = pets
  .filter((pet) => pet.raca === 'Poodle')
  .map(
    (pet) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
  );
console.log(arrayMensagens);

// 2)
const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
];

// a)

const nomeDosProduto = produtos.map((produto) => produto.nome);
console.log(nomeDosProduto);

// b)
const aplicaDesconto = (preco) => preco * 0.5;

const produtosComDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: produto.preco - aplicaDesconto(produto.preco),
  };
});
console.log(produtosComDesconto);

// c)

const arrayBebidas = produtos.filter(
  (produto) => produto.categoria === 'Bebidas'
);
console.log(arrayBebidas);

// d)
const produtosYpe = produtos.filter((produto) => produto.nome.includes('Ypê'));
console.log(produtosYpe);

// e)
const arrayOfertas = produtosYpe.map(
  (produto) => `Compre ${produto.nome} por ${produto.preco}`
);
console.log(arrayOfertas);
