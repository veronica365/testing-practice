import { Calculator } from "./practice";

describe("Calculator method for adding two numbers", () => {
  test("Should check if method can add two numbers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test("Should add two numbers in any order", () => {
    expect(Calculator.add(2, 1)).toBe(3);
  });
  test("Should add two numbers even negatives", () => {
    expect(Calculator.add(-2, -1)).toBe(-3);
  });
});

describe("Calculator method for subtracting two numbers", () => {
  test("Should check if method can subtrack two numbers", () => {
    expect(Calculator.subtrack(1, 2)).toBe(-1);
  });
  test("Should subtrack two numbers in any order", () => {
    expect(Calculator.subtrack(2, 1)).toBe(1);
  });
  test("Should subtrack two numbers even negatives", () => {
    expect(Calculator.subtrack(-2, -1)).toBe(-1);
  });
});

describe("Calculator method for multiplying two numbers", () => {
  test("Should check if method can multiply two numbers", () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
  test("Should multiply two numbers in any order", () => {
    expect(Calculator.multiply(4, 1)).toBe(4);
  });
  test("Should multiply two numbers even negatives", () => {
    expect(Calculator.multiply(-2, -1)).toBe(2);
  });
});

describe("Calculator method for dividing two numbers", () => {
  test("Should check if method can divide two numbers", () => {
    expect(Calculator.divide(1, 2)).toBe(0.5);
  });
  test("Should divide two numbers in the right order", () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });
  test("Should divide two numbers even negatives", () => {
    expect(Calculator.divide(-3, -1)).toBe(3);
  });
});
