//** https://www.codewars.com/kata/57a429e253ba3381850000fb */

const sum = (array) => array.reduce((acc, el) => acc + el, 0);

const array = [1, 5.2, 4, 0, -1];
let result = sum(array);
console.log(result);
