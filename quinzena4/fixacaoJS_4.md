```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const numFiltrados = arrayDeNumeros.filter(num => num === numeroEscolhido)
  const qtdOcorencias = numFiltrados.length

  if(qtdOcorencias === 0) {
    return 'Número não encontrado'
  }

  return `O número ${numeroEscolhido} aparece ${qtdOcorencias}x`

}
```
