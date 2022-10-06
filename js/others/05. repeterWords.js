const repeterWord = (string, word) => {
  const lowered = string.toLowerCase();
  const splitted = lowered.split(" ");
  return splitted.reduce((acc, el) => (el === word ? ++acc : acc), 0);
};

const repeter = (string) => {
  const lowered = string.toLowerCase();
  const splitted = lowered.replaceAll(",", "").split(" ");
  const reduced = splitted.reduce((acc, el) => {
    acc[el] ? acc[el]++ : (acc[el] = 1);
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] < el[1] ? el : acc
  );
};

const string =
  "hola conchatumare me llamo Hola, y soy yo hola como vamos malnacidos todos hola como estan y asi digo hola muchos holas conchatumare hola aaaaa a a a a a a a a";
const result = repeter(string);
console.log(result);
