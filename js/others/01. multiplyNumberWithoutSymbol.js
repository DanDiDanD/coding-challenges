const multiply = (number1, number2) => {
  let result = 0;
  const isPositive = Math.abs(number1) === number1;
  for (let i = 0; i < Math.abs(number1); i++)
    result = isPositive ? result + number2 : result - number2;
  return result;
};

const result = multiply(-4, 8);

console.log(result);
