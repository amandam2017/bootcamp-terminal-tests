// function countAllPaarl(regNumbers){
//     //console.log(regNumbers);
//       var fromPaarl = regNumbers.split(",");
//       var howManyFromPaarl = [];
//         for (var i = 0; i <fromPaarl.length; i++){
//           const regCount = fromPaarl[i].trim();
//             if (regCount.startsWith('CJ')){
//               howManyFromPaarl.push(regCount);
//             //console.log(regCount);
//                 //return regCount// I am not going to find a length inside the loop because it will onlt return the single reg which is returned here inside this loop 
            
//           }
//       }
//     return howManyFromPaarl.length;
//   }

module.exports = function(regNumbers){
  var fromPaarl = regNumbers.split(",");
      var howManyFromPaarl = [];
        for (var i = 0; i <fromPaarl.length; i++){
          const regCount = fromPaarl[i].trim();
            if (regCount.startsWith('CJ')){
              howManyFromPaarl.push(regCount);
            //console.log(regCount);
                //return regCount// I am not going to find a length inside the loop because it will onlt return the single reg which is returned here inside this loop 
            
          }
      }
    return howManyFromPaarl.length;
}