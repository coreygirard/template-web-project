var assert = require("assert");
describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe("Math", function() {
  it("should output 9 for 3*3", function() {
    assert.equal(9, 3 * 3);
  });
  it("should output -8 for (3-4)*8", function() {
    assert.equal(-8, (3 - 4) * 8);
  });
});
