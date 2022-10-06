//** https://www.codewars.com/kata/57a2013acf1fa5bfc4000921 */

const findAverage = (array) =>
  array.length && array.reduce((acc, el) => acc + el) / array.length;

let result = findAverage([1, 1, 1]);
console.log(result);
result = findAverage([1, 2, 3]);
console.log(result);
result = findAverage([1, 2, 3, 4]);
console.log(result);
result = findAverage([]);
console.log(result);
