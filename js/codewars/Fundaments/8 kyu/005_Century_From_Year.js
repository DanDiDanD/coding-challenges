//** https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097 */

// const century = (year) => {
//   const century = year / 100;
//   if (year % 100 === 0) return century;
//   return Math.trunc(century + 1);
// };

//** BEST SOLUTION */

const century = (year) => Math.ceil(year / 100);

const year = 1900;
const result = century(year);
console.log(result);
