//** https://www.codewars.com/kata/57a0e5c372292dd76d000d7e */

// const repeatStr = (s, string) =>
//   [...Array(s).keys()].reduce((acc) => acc + string, "");
//** BEST SOLUTION */
const repeatStr = (n, string) => string.repeat(n);

const string = "Hello";
const result = repeatStr(7, string);
console.log(result);
