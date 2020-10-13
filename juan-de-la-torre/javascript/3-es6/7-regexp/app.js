// Regular expresions

//dos formas de instanciarlas.
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

// console.log(exp1);
// console.log(exp2);

let valor, expReg;

expReg = /[0-9]/;
valor = '1992';

// buscar 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

// hora 10:30
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 AM';

// mas de uno de eso
expReg = /\d+/;
valor = '465464';

// negar la expresion
expReg = /[^0-9]/;
valor = 'ASD';

// buscar 20-10-2018 MEJORADA
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '20-10-2018';

// evaluar letras o numeros
expReg = /\w+/;
valor = '123123qeqwe'; //true
valor = 1234; // true
valor = '#$#$&'; // false

// solo mayusculas
expReg = /[A-Z]/;
valor = 'asd'; // false
valor = 'ASDASD'; // true

// testeo si una variable respeta una expresion regular.
console.log(expReg.test(valor));
