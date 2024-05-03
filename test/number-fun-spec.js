const chai = require("chai");
const expect = chai.expect;

const { returnsThree , reciprocal } = require("../problems/number-fun")

describe ('function: returns Three', function () {
    it('should return the number 3', function () {
        const num = 3;
        expect(returnsThree(num)).to.equal(3)
    })
})
describe ('function: reciprocal of a number', function () {

    it('should return reciprocal of number input', function () {
        const num1 = 1;
        const num2 = -2;
        expect(reciprocal(num1)).to.equal(-1)
        expect(reciprocal(num2)).to.equal(2)
    })
})
