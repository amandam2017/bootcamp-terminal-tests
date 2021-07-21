var currentYear = [2021];

// function yearsAgo(yearBack){
//     var day = new Date();
//   var currentYear = day.getFullYear();
//     return currentYear - yearBack;
// };

module.exports = function(yearBack){
      var day = new Date();
  var currentYear = day.getFullYear();
    return currentYear - yearBack;
}
