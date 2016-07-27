var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
var flattenarray = require("../src/flattenarray");

describe("flatten nested array", function() {

    it("should throw TypeError if not given an array", function() {
        function tryit() {
            flattenarray("bad input");
        }
        expect(tryit).to.throw(TypeError);
    });

    it("should return flat input array", function() {
        var arr = [1,2,3,4];
        var flat = flattenarray(arr);
        expect(flat).to.deep.equal(arr);
    });

    it("should flatten nested 1 deep", function() {
        var arr = [1, [2,3], 4];
        var flat = flattenarray(arr);
        expect(flat).to.deep.equal([1,2,3,4]);
    });

    it("should flatten array with heterogeneous elements", function() {
        var arr = [1, [{foo:'a', bar:'b'}, "hello"], "world"];
        var flat = flattenarray(arr);
        expect(flat).to.deep.equal([1, {foo:'a', bar:'b'}, "hello", "world"]);
    });

    it("should flatten deeply nested array", function() {
        var arr = [1, [2, [3, [4, 5], 6], 7], 8];
        var flat = flattenarray(arr);
        expect(flat).to.deep.equal([1,2,3,4,5,6,7,8]);
    });

    it("should flatten multiple nestings", function() {
        var arr = [1, [2,3], 4, [[5,6], [7,8]], [9, 10]];
        var flat = flattenarray(arr);
        expect(flat).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    })

});
