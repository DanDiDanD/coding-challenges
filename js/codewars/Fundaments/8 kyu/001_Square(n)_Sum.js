//** https://www.codewars.com/kata/515e271a311df0350d00000f */

const squareSum = (array) => array.reduce((acc, el) => acc + el * el, 0);

const array = [1, 2, 2];
const result = squareSum(array, 5);
console.log(result);
