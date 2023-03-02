import { sum, stringLength } from "./practice";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test('check if "Hello Jest" is of length 10', () => {
  expect(stringLength("Hello Jest")).toBe(10);
});

test('check if "Hello" is of length 5', () => {
  expect(stringLength("Hello")).toBe(5);
});

test("throw error if the string is not 1 or greater than 10 characters", () => {
  expect(() => stringLength("")).toThrow(
    new Error("string should at least be 1 character and not longer than 10")
  );
  expect(() => stringLength("")).toThrow(Error);
  expect(() => stringLength("Hello Ugandans")).toThrow(Error);
  expect(() => stringLength("Hello Ugandans")).toThrow(/^string should at least be 1 character and not longer than 10$/);
  expect(() => stringLength("Hello Ugandans")).toThrow(
    new Error("string should at least be 1 character and not longer than 10")
  );
});
