    module.exports = function(regNum, regFromTown){
      var fromTown = regNum.split(",");
      var carReg = fromTown.length;
      var fromStellies = [];
      var regCount = 0;
      for (var i = 0;i < fromTown.length; i++){
        const currentRegNum = fromTown[i].trim() ;
          if (currentRegNum.startsWith(regFromTown)){
             fromStellies.push(fromTown[i].trim());
            //console.log(fromStellies);
            regCount++;
          }
      }
      return regCount;
    }