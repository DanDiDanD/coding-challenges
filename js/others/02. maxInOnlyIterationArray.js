const getMaxInArray = (array) =>
  array.reduce((acc, el) => (acc < el ? el : acc));

const array = [1, 89, 2];
const result = getMaxInArray(array);
console.log(result);
