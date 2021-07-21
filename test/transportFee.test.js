let assert = require("assert");
let transportFee = require("../transportFee");

describe('this test transportFee function,', function(){
    it('should return cost for morning shift', function(){
        assert.equal("R20", transportFee("morning"));
    });
    it('should return cost for afternoon shift', function(){
        assert.equal("R10", transportFee("afternoon"));
    });
    it('should return cost for late/night shift', function(){
        assert.equal("free", transportFee("night"));
    })
})