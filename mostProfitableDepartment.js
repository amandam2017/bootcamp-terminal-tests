module.exports = function(salesData){
  var dataMap = {};
    for(var i=0; i<salesData.length; i++){
      const data = salesData[i];
      dataMap[data.department] = 0; 
    }
      
    for(var i=0; i<salesData.length; i++){
        const data = salesData[i];
      var currentDepartmentTotal = dataMap[data.department];
      currentDepartmentTotal += data.sales;
      dataMap[data.department] = currentDepartmentTotal;
    }    
    var mostSales = 0;
    var mostSalesDpt = '';
    for(const data in dataMap){
      const currentDataDepartmentSales = dataMap[data];
      if(currentDataDepartmentSales > mostSales ){
        mostSales = currentDataDepartmentSales;
        mostSalesDpt = data;
      }
    }
    console.log(mostSales);
    console.log(mostSalesDpt);
    return mostSalesDpt;
}
  
