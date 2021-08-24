```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const peso1 = 1
  const peso2 = 2
  const peso3 = 3

  const somaPesos = peso1 + peso2 + peso3

  const mediaPonderada = (ex * peso1 + p1 * peso2 + p2 * peso3) / somaPesos

  if(mediaPonderada >= 9){
    return 'A'
  } else if(mediaPonderada >= 7.5 && mediaPonderada < 9) {
    return 'B'
  } else if(mediaPonderada >= 6 && mediaPonderada < 7.5) {
    return 'C'
  } else {
     return 'D'
  }
}

```
