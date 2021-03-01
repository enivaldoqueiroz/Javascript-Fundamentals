//Verificando tipo
console.log(typeof Object);         // É uma função
//Instanciado um Objeto
console.log(typeof new Object);    // É uma objeto

const Cliente = function(){}
console.log(typeof Cliente);        // É uma função
console.log(typeof new Cliente);    // É uma objeto

class Produto {} // ES 2015, ES6
console.log(typeof Produto);        // É uma função
console.log(typeof new Produto());  // É uma objeto