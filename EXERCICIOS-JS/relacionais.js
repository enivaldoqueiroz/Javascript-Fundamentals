//Operadores Ralacionais

console.log('01)','1' == 1);    // == compando valor
console.log('02)','1' === 1);   // === comparando tipo
console.log('03)','3'!=3);      // != diferente valor
console.log('04)','3'!==3);     // !== Extritamente diferente no tipo

console.log('05)',3 < 3);
console.log('06)',3 > 3);
console.log('07)',3 <= 3);
console.log('08)',3 >= 3);

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)',d1 === d2);
console.log('10)',d1 == d2);
console.log('11)',d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);

/** SAIDAS
 * [Running] node "f:\ANGULAR PROJETOS\JAVASCRIPT2021\Javascript-Fundamentals\EXERCICIOS-JS\relacionais.js"
01) true
02) false
03) false
04) true
05) false
06) false
07) true
08) true
09) false
10) false
11) true
12) true
13) false

[Done] exited with code=0 in 0.414 seconds
 */