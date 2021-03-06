//Tratamento de exceções javascript
function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Messagem'
    throw{
        nome: erro.name,
        msg: erro.massage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('final');
    }
    
}

const obj = {nome: 'Enivaldo'}
imprimirNomeGritado(obj)