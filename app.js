/* app.js */
// Opção 2: importe as funções circleArea() e squareArea() usando a desestruturação de objetos aqui
const { circleArea,squareArea } = require('./shape-area.js');

const raio = process.argv[2];
const lado = process.argv[3];
//Use os métodos importados circleArea() e squareArea() aqui

const areaOfCircle = circleArea(raio);
const areaOfSquare = squareArea(lado);
//Imprima os valores de areaOfCircle e areaOfSquare aqui
console.log(`A área do círculo é: ${areaOfCircle}`);
console.log(`A área do quadrado é: ${areaOfSquare}`);