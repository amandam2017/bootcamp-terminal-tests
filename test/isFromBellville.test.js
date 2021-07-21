let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('this test isFromBellville function,', function(){
    it('should return false because there are no cars from Bellville(CY))', function(){
         assert.equal(false, isFromBellville('CJ 45875'));
    });
    it('should return false if the carReg is from other town not Bellville', function(){
        //The below is false because I have named the place instead of using its registration number to identify
        assert.equal(false, isFromBellville('CK 8765'));
   });
   it('should return true if there are cars with a registration from Bellville' , function(){
    assert.equal(true, isFromBellville('CY 44566'));
})
})

