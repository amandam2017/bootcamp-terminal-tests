module.exports = function(itemsList, threshold){
  console.log(threshold)
  var itemsOver = [];
 
  for(var i = 0; i < itemsList.length; i++){
    var listItem = itemsList[i];
    if(listItem.qty > threshold){
      itemsOver.push(listItem)
    }
  }
  return itemsOver
}
