// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número');
  const num2 = prompt('Digite o segundo número');

  console.log(Number(num1) + Number(num2));
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem');

  console.log(mensagem);
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt('Digite a altura do retangulo'));
  const largura = Number(prompt('Digite a largura do retangulo'));

  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual'));
  const anoNascimento = Number(prompt('Digite o ano que você nasceu'));
  console.log(anoAtual - anoNascimento);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Digite seu peso'));
  const altura = Number(prompt('Digite a sua altura'));
  console.log(peso / (altura * altura));
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome');
  const idade = prompt('Digite sua idade');
  const email = prompt('Digite seu email');
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite a primeira cor');
  const cor2 = prompt('Digite a segunda cor');
  const cor3 = prompt('Digite a terceira cor');

  console.log([cor1, cor2, cor3]);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt('Digite uma palavra');

  console.log(palavra.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = prompt('Digite o custo do espetaculo');
  const valorIngresso = prompt('Digite o valor do ingresso');

  console.log(custoEspetaculo / valorIngresso);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite a primeira palavra');
  const string2 = prompt('Digite a segunda palavra');

  console.log(string1.length === string2.length);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt('Digite a primeira palavra');
  const string2 = prompt('Digite a segunda palavra');

  console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual'));
  const anoNascimento = Number(prompt('Digite o ano que você nasceu'));
  const anoEmissaoCarteiraIdentidade = Number(
    prompt('Digite o ano de emissão da carteira de identidae')
  );

  const idade = anoAtual - anoNascimento;
  const anoRenvarCarteira = anoAtual - anoEmissaoCarteiraIdentidade;

  const renovaCarteiraCincoAnos = idade <= 20 && anoRenvarCarteira >= 5;
  const renovaCarteiraDezAnos =
    (idade > 20 || idade <= 50) &&
    anoRenvarCarteira >= 10 &&
    anoRenvarCarteira <= 15;
  const renovaCarteiraQuinzeAnos = idade > 50 && anoRenvarCarteira >= 15;

  console.log(
    renovaCarteiraCincoAnos || renovaCarteiraDezAnos || renovaCarteiraQuinzeAnos
  );
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt('Digite a ano'));

  const multiplo4 = ano % 4 == 0;
  const multiplo400 = ano % 400 == 0;
  const multiplo100 = ano % 100 == 0;

  const ehAnoBissexto =
    multiplo400 || (multiplo4 && !(multiplo100 && !multiplo400));

  console.log(ehAnoBissexto);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const primeiraPergunta = prompt('Você tem mais de 18 anos?');
  const segundaPergunta = prompt('Você possui ensino médio completo?');
  const terceiraPergunta = prompt(
    'Você possui disponibilidade exclusiva durante os horários do curso?'
  );

  console.log(
    primeiraPergunta === 'sim' &&
      segundaPergunta === 'sim' &&
      terceiraPergunta === 'sim'
  );
}
