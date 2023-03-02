export function sum(a, b) {
  return a + b;
}

export const stringLength = (str) => {
  if (!str.length || str.length > 10) {
    throw new Error(
      "string should at least be 1 character and not longer than 10"
    );
  }
  return str.length;
};

export const reverse = (str) => {
  let newString = String(str).split("");
  newString = newString.reverse().join("");
  return newString;
};

export class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
  static subtrack(num1, num2) {
    return num1 - num2;
  }
  static divide(num1, num2) {
    return num1 / num2;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  }
}

export const capitalize = (string) => {
  let newString = string.toLowerCase().split("");
  const capital = newString.shift();
  newString = `${capital.toUpperCase()}${newString.join("")}`;
  return newString;
};
