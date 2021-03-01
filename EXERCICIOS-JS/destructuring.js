// DESTRUCTURING JS -Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua 12',
        numero: 1000
    }
}
// Extraia do objeto os compos nome e idade
const { nome, idade} = pessoa
console.log(nome, idade);

const {nome:n, idade:i} = pessoa
console.log(n,i);

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const { endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);

const { conta:{ag, num}} = pessoa
console.log(ag, num);