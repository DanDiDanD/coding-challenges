const deleteTypeofEmptyWithFilter = (array) => array.filter((el) => el);

const deleteTypeofEmptyWithReduce = (array) =>
  array.reduce((acc, el) => {
    if (el) return [...acc, el];
    return acc;
  }, []);

const array = [2, 4, 0, 5, undefined, 56, null, "", 789, true, {}, false, 11];
let result = deleteTypeofEmptyWithReduce(array);
console.log(result);
