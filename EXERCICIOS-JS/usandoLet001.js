//Variaveis definidas com a palacra reservada 'var' tem escopo global e de função
var numero = 1
{// O ler trabalha com escopo de bloco
    //Variaveis definidas com a palacra reservada 'let' tem escopo global e de função e de bloco
    let numero = 2
    console.log('dentro = ', numero);
}
console.log('fora =', numero);