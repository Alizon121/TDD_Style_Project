const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person")

describe('Person class', function () {
    let person;
    let person2;

    beforeEach(() => {
        person = new Person('billy', 25)
        person2 = new Person('jesse', 21)
    })

it("should be an instance of the Person class", function () {
expect(person).to.be.an.instanceOf(Person)
})

it("constructor", function () {
expect(person.name).to.equal("billy")
expect(person.age).to.equal(25)
})


describe("sayHello", function () {
    it("should return a greeting message with a person's name", function(){
         expect(person.sayHello()).to.equal("Hello my name is billy")

})
})


describe("visit", function () {
    it("should have an instance method that states the person instance visited another person", function() {
        let visitngPerson = person.visit(person2)
            expect(visitngPerson).to.equal('billy visited jesse')
})
})

describe("switchVisit", function() {
it ("should invoke the visit instance method and pass in a new argument", function () {
expect(person.switchVisit(person2)).to.equal("jesse visited billy")
})

it("should call otherPerson.visit", () => {
    const otherPersonSpy = chai.spy.on(person2, "visit")
    person.switchVisit(person2)
    expect(otherPersonSpy).to.have.been.called.once
})
})

describe("update(obj", function () {
it("should throw a TypeError if the incoming argument is not an object", function () {
    expect(() => person.update("invalid")).to.throw(TypeError, "argument must be an object")
})

})

// it('should have instance method that invokes the visit function and passes in the current instance', function(){

//     visit()
// })

// it("should have an instance method to determine if the incoming argument is a valid object", function () {
//     expect(this.Person).to.be.an("object")
//     expect(this.update).to.be.an("object")


})

