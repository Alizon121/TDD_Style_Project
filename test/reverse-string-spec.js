const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string")

describe("Reverse String", () => {
it("Should reverse the string", () => {
    const result = reverseString("fun")
    expect(result).to.equal("nuf")    
})
})

it("Should throw a typeError if argument is not a string", () => {
    expect(() => reverseString(123)).to.throw(TypeError)
})

