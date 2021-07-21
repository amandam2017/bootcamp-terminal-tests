describe('this test countAllFromTown function,', function(){
    it('should return 3, the total of the registration numbers from Stellies', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.deepEqual(fromStellies, 3)
    });

    it('should return 0 if there are no registrations from Kraaifontein', function(){
        var fromKraaifontein = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.equal(fromKraaifontein, 0);
    });

    it('should return 1, the total of the registration numbers from fromPaarl' , function(){
        var fromPaarl = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        //fromStellies should contains
        assert.deepEqual(fromPaarl, 1)
    })
})



