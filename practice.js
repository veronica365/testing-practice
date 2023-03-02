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
