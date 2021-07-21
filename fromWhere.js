// function fromWhere(carReg){
// 	if(carReg.startsWith('CY')){
//     	return "Bellville"
//      }
//   else if(carReg.startsWith('CJ')){
//   	return "Paarl"
//   }
//   else if(carReg.startsWith('CA')){
//   	return "Cape Town"
//   }
//   else{
//   	return "Some other place!"
//   }
// }

module.exports = function(carReg){
  if(carReg.startsWith('CY')){
    return "Bellville"
   }
  else if(carReg.startsWith('CJ')){
    return "Paarl"
  }
  else if(carReg.startsWith('CA')){
    return "Cape Town"
  }
  else{
    return "Some other place!"
  }
}