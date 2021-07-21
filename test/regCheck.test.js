describe('this test regCheck function,', function(){
    it('should check and return true if the is a car from GP', function(){
        //var isGP = regCheck('DV 23 NB GP', 'GP');
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('should check and return false if there is no car from MP', function(){
        //var isMP = regCheck('DV 23 LP GP', 'MP');
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    })
    it('this checks if theres regCode at the end of the car registration', function(){
       // var isBellville = isFrom('CY 189-012', 'CY');
        assert.equal(regCheck('CY 189-012 CY', 'CY'), true);
    })
    it('should return false if there is no car from the specified town(ND)', function(){
         //var isDurban = isFrom('CY 189-012', 'ND');
         assert.equal(regCheck('CY 189-012', 'ND'), false);
     })
})

// var isGP = regCheck('DV 23 NB GP', 'GP');
// var isMP = regCheck('DV 23 LP GP', 'MP');
// var isBellville = isFrom('CY 189-012', 'CY');
// var isDurban = isFrom('CY 189-012', 'ND');