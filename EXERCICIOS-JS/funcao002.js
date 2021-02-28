// Armazenando uma funçao em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2 , 3)

// Armazendo uma funcao ARROW em uma variavel
// Redução de uma função
const soma = (a, b) =>{ 
    return a + b
}

console.log(soma(2, 3));

//Retorno Implicito da uma Funçao 
// Redução de uma função - Trocando a palavra function por =>
const subtracao = (a, b) => a - b
console.log(subtracao(2 ,3));

//Maid reduzida ainda
const imprimir2 = a => console.log(a);

imprimir2('Arrow Function é legal')