import { evenOrOdd, multiply } from "@/platground";

describe("basic math", () => {
  it("adds two numbers", () => {
    // what i expect
    expect(1 + 1).toBe(2);
  });
  // one test
  it("subtract two numbers", () => {
    //  and one expect
    expect(5 - 3).toBe(2);
  });
});

describe("even or odd", () => {
  describe("when even", () => {
    it("even:", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });
  describe("when odd", () => {
    it("odd:", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
});

describe("multiply", () => {
  // it - test fn
  it("multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
