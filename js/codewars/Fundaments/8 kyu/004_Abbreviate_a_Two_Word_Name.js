//** https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3 */

const abbrevName = (name) =>
  name
    .toUpperCase()
    .split(" ")
    .map((el) => el[0])
    .join(".");

const name = "Daniel Angeles";
const result = abbrevName(name);
console.log(result);
