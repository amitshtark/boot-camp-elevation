const Ex = require('./code')

test("should return true if n is even, false otherwise", () => {
    const exercise = new Ex();
    expect(exercise.isEven(10)).toBeTruthy();
    expect(exercise.isEven("hi")).toBeFalsy();

})
test("should remove at least one element from the array `arr`", () => {
    const exercise = new Ex();
    expect(exercise.removeAtLeastOne([1, 2, 3, 4]).length).toBeLessThan(4);
    expect(exercise.removeAtLeastOne(["hi"])).toEqual([]);

})
test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    const exercise = new Ex();
    expect(exercise.simplify(`hi!a#.m,i't`)).toBe("hiamit");
    expect(exercise.simplify(`!!!`)).toBe("");

})
test("should return true if there are more trues, false otherwise, and error if no booleans", () => {
    const exercise = new Ex();
    expect(exercise.validate([true, true, true, false, false])).toBe(true);
    expect(exercise.validate([true, false, true, false, false])).toBe(false);
    expect(exercise.validate([])).toEqual({error: "Need at least one boolean"});
    expect(exercise.validate([1, "hello", null])).toEqual({ error: "Need at least one boolean" });
    expect(exercise.validate([true, false])).toBe(false);
})