const flatten = (array) =>
  array.reduce((acc, el) => {
    if (el.length) return [...acc, ...el];
    return [...acc, el];
  }, []);

const array = [[4, 5], [6, 7, [8, 9]], 6, 8, [[]]];
const result = flatten(array);
console.log(array);
console.log(result);
