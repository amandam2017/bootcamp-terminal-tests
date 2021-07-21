// function totalPhoneBill(phoneRecords){
//     //console.log(phoneRecords);
//     var bill = 0;
//     var list = phoneRecords.split(', ');
//      for(var i=0; i<list.length;i++){
//        //console.log(bill)
//        if( list[i] == 'call'){
//        bill += 2.75}
//     else if( list[i] == 'sms'){
//        bill += 0.65
//     }
//     }
//     return "R"+bill.toFixed(2);
//     //console.log("R"+bill.toFixed(2));
//   }

module.exports = function(phoneRecords){
   var bill = 0;
    var list = phoneRecords.split(', ');
     for(var i=0; i<list.length;i++){
       //console.log(bill)
       if( list[i] == 'call'){
       bill += 2.75}
    else if( list[i] == 'sms'){
       bill += 0.65
    }
    }
    return "R"+bill.toFixed(2);
}