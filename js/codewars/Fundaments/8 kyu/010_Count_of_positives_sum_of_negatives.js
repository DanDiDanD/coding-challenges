//** https://www.codewars.com/kata/576bb71bbbcf0951d5000044 */

const countPositivesSumNegatives = (array) =>
  array?.length
    ? array.reduce(
        (acc, el) => {
          if (el > 0) acc[0]++;
          else acc[1] += el;
          return acc;
        },
        [0, 0]
      )
    : [];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let result = countPositivesSumNegatives(array);
console.log(result);
