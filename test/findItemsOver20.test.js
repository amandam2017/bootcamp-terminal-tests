describe('The find items over 20 function', function(){


    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27},
        {name : 'apples', qty : 3}
  
    
    ];


    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'apples', qty : 3}
  
    
    ];




var result = [
    {name : 'oranges', qty : 37},
    {name : 'mangos', qty : 27},
]
    it('should be able to find items over the quantity 20', function(){
        assert.deepEqual(findItemsOver20(itemList), result);
    })


    it('should return an empty list if there is no items over20', function(){
        assert.deepEqual(findItemsOver20(itemList2), []);
    })
});