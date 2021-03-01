// Par nome/valor(chave/valor)
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

//Ojetos são grupos aninhados de pares nome/valor(chave/valor)
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua 2',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);