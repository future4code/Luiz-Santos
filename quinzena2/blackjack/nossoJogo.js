/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de BlackJack!');
const confirme = confirm('Quer iniciar uma nova rodada?');

let usuario = {
  carta1: '',
  carta2: '',
};
let computador = {
  carta1: '',
  carta2: '',
};

let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

if (confirme) {
  usuario.carta1 = comprarCarta();
  usuario.carta2 = comprarCarta();
  pontuacaoUsuario = usuario.carta1.valor + usuario.carta2.valor;

  computador.carta1 = comprarCarta();
  computador.carta2 = comprarCarta();
  pontuacaoComputador = computador.carta1.valor + computador.carta2.valor;

  console.log(
    `Usuario - cartas: ${usuario.carta1.texto} ${usuario.carta2.texto} - pontuação ${pontuacaoUsuario}`
  );
  console.log(
    `Computador - cartas: ${computador.carta1.texto} ${computador.carta2.texto} - pontuação ${pontuacaoComputador}`
  );

  if (pontuacaoUsuario > pontuacaoComputador) {
    console.log('O usuário ganhou!');
  } else if (pontuacaoComputador > pontuacaoUsuario) {
    console.log('O computador ganhou!');
  } else {
    console.log('Empate!');
  }
} else {
  console.log('O jogo acabou');
}
