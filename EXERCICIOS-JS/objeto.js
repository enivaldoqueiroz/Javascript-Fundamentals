// Criação e Objetos em Javascript
//Nota: Um objeto em javascript é uma coleção de chaves e valores
const prod1 = {}
prod1.nome = 'Celalar Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1);

//Objeto dentro de objeto
//Nota: Isso não é JSON
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla:2
        }
    }
}

//JSON
'{"nome": "Camisa Polo", "preco": 79.90}'

console.log(prod2);
