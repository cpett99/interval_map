var expect    = require("chai").expect;
var mapRanges = require("../app/interval_map")

// Instantiate mapRanges class
const myMap = new mapRanges()

// set ranges
myMap.insert([1,6], 4)
myMap.insert([5,10], 8)
myMap.insert([12,16], 14)
myMap.insert([14,22], 68)
// Add new range
// myMap.insert([KVALUE_MIN,KVALUE_MAX], MAPPED_VALUE)


describe("Interval Map ranges\n    myMap.insert([1,6], 4)\n    myMap.insert([5,10], 8)\n    myMap.insert([12,16], 14)\n    myMap.insert([14,22], 68)\n", function() {

    describe("Find range value for 1", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(1)).to.equal(4);
        });
    });
    describe("Find range value for 5.5", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(5.5)).to.equal(8);
        });
    });
    describe("Find range value for 11", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(11)).to.equal(0);
        });
    });
    describe("Find range value for 13", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(13)).to.equal(14);
        });
    });
    describe("Find range value for 14", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(14)).to.equal(68);
        });
    });

    // Add new test case
    /*
    describe("Find range value for ENTER_RANGE_VALUE", function() {
        // specification for finding range value
        it("", function() {
            expect(myMap.at(ENTER_RANGE_VALUE)).to.equal(ENTER_EXPECTED_RESULT_VALUE);
        });
    });
    */
  
  });