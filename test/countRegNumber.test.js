let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('this test countRegNumber function,', function(){
    it('should 6, the total of the registration numbers on the list', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CA 42665, AA 12 RT GP, CA 182736,CY 523519')
        assert.equal(6, regCount)
    });


    it('should return 0, if empty list', function(){
        var regCountTwo1 = countRegNumber('')
        // console.log(regCount)

        assert.equal(0, countRegNumber(''));
    })

    it('should return 5, the total of registration numbers on the list', function(){
        var regCountThree = countRegNumber('CA 42665, AA 12 RT GP, CA 182736,CY 523519,CJ 812328')
        assert.equal(5, regCountThree);
    })
})



// describe('The count reg number function', function() {
//     it('should return 3 for reg numbers CY 0987, CA 3456, ND 2680', function() {
//         var regCount = countRegNumber('CY 0987, CA 3456, ND 24680');
//         assert.equal(3, regCount);
//     });
//     it('should return 5 for reg numbers CY 0987, CA 3456, ND 2680, CL 200, CA 390', function() {
//         var regCount = countRegNumber('CY 0987, CA 3456, ND 24680, CL 200, CA 390');
//         assert.equal(5, regCount);
//     });
// });