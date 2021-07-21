let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('this test countAllPaarl function,', function(){
    it('should find all carReg from paarl, counts them', function(){
        assert.equal(2, countAllPaarl( "CA 123, CY 123, CK 3122, CJ 23232, CJ 3232"));
    })
    it('should return 0 if there are no cars from a regigration "CJ"', function(){
        assert.equal(0,  countAllPaarl("CA 123, CY 123, CK 3122, CK 23232, CY 3232"));
    })
    it('should return 0 if there is no carRegistration from the list', function(){
        assert.equal(0, countAllPaarl(""));
    })
})