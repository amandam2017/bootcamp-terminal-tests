let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('this function find Items that are Over from the itemList', function() {

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27},
        {name : 'apples', qty : 3},
    
    ];


    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'apples', qty : 3},
    
    
    ];
    
    it('should return items over the threshold', function() {
        var threshold = 20;
        assert.deepEqual([{name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27}], findItemsOver(itemList, threshold));
    })


     
    it('should return an empty array if there are no items on the threshold', function() {
        var threshold = 20;
        assert.deepEqual([], findItemsOver(itemList2, threshold));
    })
});