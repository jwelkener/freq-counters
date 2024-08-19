// is-subsequence.test.js
const isSubsequence = require('isSubsequence'); // Adjust path as needed

describe("isSubsequence", function() {
  it("should return true if the first string is a subsequence of the second", function() {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it("should return false if the first string is not a subsequence of the second", function() {
    expect(isSubsequence("abc", "acb")).toBe(false);
    expect(isSubsequence("notasubstring", "banana")).toBe(false);
    expect(isSubsequence("almost", "almossssss")).toBe(false);
  });
});
