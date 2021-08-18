```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

 const salarioFuncionario = 2000;
 const salarioComComissao = salarioFuncionario + (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);


 if(qtdeCarrosVendidos === 0) {
   return salarioFuncionario;
 }

 return salarioComComissao;

}

```
