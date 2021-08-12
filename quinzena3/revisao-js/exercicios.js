// EXERCÍCIO 01
function inverteArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayNumerosPares = [];
  for (let num of array) {
    if (num % 2 === 0) {
      num = num ** 2;
      arrayNumerosPares.push(num);
    }
  }

  return arrayNumerosPares;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayNumerosPares = [];
  for (let num of array) {
    if (num % 2 === 0) {
      arrayNumerosPares.push(num);
    }
  }

  return arrayNumerosPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0;
  for (let num of array) {
    if (num > maior) {
      maior = num;
    }
  }

  return maior;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  const expressao1 = booleano1 && booleano2 && !booleano4;
  const expressao2 = (booleano1 && booleano2) || !booleano3;
  const expressao3 = (booleano2 || booleano3) && (booleano4 || booleano1);
  const expressao4 = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  const expressao5 =
    (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3);

  const respostas = [
    expressao1,
    expressao2,
    expressao3,
    expressao4,
    expressao5,
  ];

  return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPares = [];
  let qtdPares = 0;
  let i = 0;
  while (qtdPares < n) {
    if (i % 2 === 0) {
      arrayPares.push(i);
      qtdPares++;
    }
    i++;
  }

  return arrayPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  const equilatero = a == b && a == c && b == c;
  const isoceles = a == b || (a == c && b == c);

  if (equilatero) {
    return 'Equilátero';
  } else if (isoceles) {
    return 'Isósceles';
  } else {
    return 'Escaleno';
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero = 0;
  let maiorDivisivelPorMenor;
  let diferenca = 0;

  if (num1 > num2) {
    maiorNumero = num1;
    maiorDivisivelPorMenor = maiorNumero % num2 === 0;
    diferenca = num1 - num2;
  } else {
    maiorNumero = num2;
    maiorDivisivelPorMenor = maiorNumero % num1 === 0;
    diferenca = num2 - num1;
  }

  return {
    maiorNumero,
    maiorDivisivelPorMenor,
    diferenca,
  };
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let segundoMaior = 0;
  let segundoMenor = 0;
  const ultimaPosicao = array.length - 1;

  const arrayOrdenado = array.sort((a, b) => a - b);

  segundoMenor = arrayOrdenado[1];
  segundoMaior = arrayOrdenado[ultimaPosicao - 1];

  return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const arrayOrdenado = array.sort((a, b) => a - b);

  return arrayOrdenado;
}

// EXERCÍCIO 12
function filmeFavorito() {}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {}

// EXERCÍCIO 17C
function verificaParidade(array) {}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
