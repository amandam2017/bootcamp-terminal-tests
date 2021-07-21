describe('this test fromWhere function', function() {
    it('should return bellville for CY', function() {
        var reg = fromWhere('CY 182736');
        assert.equal('Bellville', reg);

    });
    it('should be able to return paarl for CJ', function() {
        var regTwo = fromWhere('CJ 182141');
        assert.equal('Paarl', regTwo);
    });
    it('should be able to return Cape Town for CA', function() {
        var regThree = fromWhere('CA 222736');
        assert.equal('Cape Town', regThree);
    });
    it('should return Some other place if a registration is from not in the specified place', function() {
        var message = fromWhere('ND 998758');
        assert.equal('Some other place!', message); 
    });
});
