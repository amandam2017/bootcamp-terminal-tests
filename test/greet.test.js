let assert = require("assert");
let greet = require("../greet");

describe('this test greet function,' , function(){
    it('should greet Mnashe correcltly' , function(){
        //this assert should fail
        assert.equal(greet('Mnashe'), 'Hello, Mnashe');
        
    });
    it('should greet Yolie correcltly' , function(){
        //this assert should fail
        assert.equal(greet('Yolie'), 'Hello, Yolie');;
        
    });
    it('should greet Oscar correcltly' , function(){
        //this assert should pass
        assert.equal(greet('Oscar'), 'Hello, Oscar');
        
    })
});


