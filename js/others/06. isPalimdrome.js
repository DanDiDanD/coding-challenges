const isPalindromeWithReduce = (string) => {
  const lowered = string.toLowerCase();
  const splitted = lowered.replace(/\s/g, "").split("");
  const len = splitted.length - 1;
  return splitted.reduce(
    (acc, el, i, arr) => (acc && el === arr[len - i] ? true : false),
    true
  );
};

const isPalindromeReverse = (string) => {
  string = string.replace(/\s/g, "");
  const lowered = string.toLowerCase();
  const splitted = lowered.split("");
  const reverse = splitted.reverse();
  const join = reverse.join("");
  return lowered === join;
};

const string = "Anita lava la tina";
const result = isPalindromeReverse(string);
console.log(result);
