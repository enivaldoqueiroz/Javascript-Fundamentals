const valores = [7.7, 8.9, 6.3,9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]); // Valor indefinido(underfined)

valores[4] = 10

console.log(valores);
console.log(valores.length);//Função length = Verifica a quantidade de elementos no array

valores.push({id:3}, false, null, 'Teste') //Função push serve para adicionar novos elementos no array
console.log(valores);

console.log(valores.pop()); // Função pop = Retira o ultimo valor do array
delete valores[0]
console.log(valores);

console.log(typeof valores);


