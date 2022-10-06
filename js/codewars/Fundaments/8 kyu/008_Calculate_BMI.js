//** https://www.codewars.com/kata/57a429e253ba3381850000fb */

const bmi = (w, h, bmi = w / h / h) => {
  console.log(bmi);
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30.0) return "Overweight";
  return "Obese";
};

//** BEST CLEVER SOLUTION */
// const bmi = (w, h, bmi = w / h / h) =>
//   bmi <= 18.5
//     ? "Underweight"
//     : bmi <= 25
//     ? "Normal"
//     : bmi <= 30
//     ? "Overweight"
//     : "Obese";

let result = bmi(170, 104);
console.log(result);
