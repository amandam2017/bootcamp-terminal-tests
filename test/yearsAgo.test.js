describe('yearsAgo function,', function(){
    it('should return 45 which is the diffYears between the current year and 1976', function(){
        assert.equal(45, yearsAgo(1976));
    })

    var currentYear = [2021];
    it('should return 0 diff if we are in current year', function(){
        assert.equal(0, yearsAgo(currentYear));
    })
})