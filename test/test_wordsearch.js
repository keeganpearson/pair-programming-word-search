const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  // New test for a word written vertically
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['U', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['T', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['H', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['O', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ADULTHOOD')

    assert.isTrue(result);
  });

  // test for an empty array
  it("should return false if word matrix is empty array", function() {
    const result = wordSearch([], 'FRANK')

    assert.isFalse(result);
  });

  // test for no word present
  it("should return false if word not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['B', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['C', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['F', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['G', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['H', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['I', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'XYZ')

    assert.isFalse(result);
  });
});

