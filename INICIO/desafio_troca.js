let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

// Antes da troca
console.log(`a = ${a}`);
console.log(`b = ${b}`);

let aux = a;
a = b;
b = aux;
console.log();
// Apos a traco
console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log();

[a, b] = [b, a]
console.log(a);
console.log(b);

