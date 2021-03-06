//Validação de CEP com RegEx em JavaScript

const isValidBRZip = (zip) =>{
    const pattern = /^[0-9]{5}-[0-9]{3}$/;
    return pattern.test(zip);
}

//isValidBRZip('30110-002'); //true
//isValidBRZip('asdfasdff-002'); //false
console.log('A Expressão Regular /^[0-9]{5}-[0-9]{3}$/ para validação de CEP');
console.log('30110-002 é ' + isValidBRZip('30110-002'));
console.log();
console.log('asdfasdff-002 é ' + isValidBRZip('asdfasdff'));
console.log();