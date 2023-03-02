import { capitalize } from "./practice";

test("Should capitalise the first letter or a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
