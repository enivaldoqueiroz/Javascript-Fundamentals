const nome = 'Lana'

//String com quebra de linha
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

//Expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase() //Utilizando função
console.log(`Ei... ${up('cuidado')}!`);