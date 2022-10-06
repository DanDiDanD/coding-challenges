//** https://www.codewars.com/kata/5772da22b89313a4d50012f7 */

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

let result = greet("Daniel", "Daniel");
console.log(result);

result = greet("Greg", "Daniel");
console.log(result);
