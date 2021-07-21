//--these steps helped me to pass findItemsOver20--//
//first loop through the list
//find the items quantity on the list using dotnotation .qty
//then after I have found them I need to store them (in a new variable)
//use condition to find if there are qty's that are higher than 20
//then keep on looking for others that have a quantity that is greater than 20
//then I created an empty variable that I am goint to psh all the itemsOver 20
//then push them there

// function findItemsOver20(itemsList){
// 	//console.log(objectList)
//   //going to push my over20 items here
//   var itemsOver20 = [];
//  //Looping through the list 
//   for(var i=0; i<itemsList.length; i++){
 
//     //find the items quantity on the list using dotnotation .qty and store them on listQuantities
// 	var listQuantities = itemsList[i];
//     //console.log(listQuantities)//returns the list with its qty
//     //looop over the list and check those that are more than 20
//     if(listQuantities.qty >20){
//       //console.log(listQuantities);
//       itemsOver20.push(listQuantities);
      
//     }
// 	}
//   return itemsOver20;
// }

module.exports = function(itemsList){
  var itemsOver20 = [];
    for(var i=0; i<itemsList.length; i++){
	  var listQuantities = itemsList[i];
    if(listQuantities.qty >20){
      itemsOver20.push(listQuantities);
      
    }
	}
  return itemsOver20;
}