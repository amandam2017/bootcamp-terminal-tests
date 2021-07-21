module.exports = function(carReg){
	if(carReg == '' || carReg == ' '){
		return 0;
	}
		var regCount = carReg.split(',');
	  	return regCount.length;
}
