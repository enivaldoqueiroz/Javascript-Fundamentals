// Null Undefined em Javascript

let valor // não incializado
console.log(valor);

valor = null // Ausencia de valor
console.log(valor);
//console.log(valor.toString()); // Erro! Retorno: TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);