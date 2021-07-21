var call = 2.75;
var sms = 0.65;

describe('this test totalPhoneBill function,', function(){
    it('this should bring the total of sent smses', function(){
        assert.equal("R1.95" ,totalPhoneBill("sms, sms, sms"));
    });
    it('this should bring the total calls made', function(){
        assert.equal("R5.50" ,totalPhoneBill("call, call"));
    })
    it('this should bring the total costs of all the phone usage', function(){
        assert.equal("R7.45" ,totalPhoneBill("sms, sms, sms, call, call"));
    })
})