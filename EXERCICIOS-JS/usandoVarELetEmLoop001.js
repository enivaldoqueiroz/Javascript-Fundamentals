
// for(var i = 0; i < 10;i++){
//     console.log(i);
// }
// console.log('i =',i);

// for(let i = 0; i < 10;i++){
//     console.log(i);
// }
// console.log('i =',i);

/* USANDO VAR
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()
 SAIDA NO TERMINAL
[Running] node "f:\ANGULAR PROJETOS\JAVASCRIPT2021\Javascript-Fundamentals\EXERCICIOS-JS\usandoVarELetEmLoop001.js"
10
10
*/

/* USANDO LET
const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

[Running] node "f:\ANGULAR PROJETOS\JAVASCRIPT2021\Javascript-Fundamentals\EXERCICIOS-JS\usandoVarELetEmLoop001.js"
2
6
8*/