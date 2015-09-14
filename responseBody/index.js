
/**
 * set the responseBody JSON here. each response is named with a transactionId.
 * i.e. when a user send a query string with transactionId=good the response
 * under "good" will be returned
 */

var responses = {

  good: function() {
    
    return {
      companyId: "ResaleWeekly",
      itemId: "259853",
      itemUrl: "http:\/\/www.resaleweekly.com\/catalog\/product\/view\/id\/259853",
      mobileItemUrl: "http:\/\/www.resaleweekly.com\/catalog\/product\/view\/id\/259853",
      transactionId: "random",
      currencyCode: "GBP",
      description: "IN VERY GOOD WORKING CONDITION NEW DASH MONITOR BEING FITTED NEW TRACK SPADS BEING FITTEDNEW IDLERS BEING FITTED FULLY SERVICED LARGE ROCK BUCKETTRACK CHAINS 80% SPROCKETS 80% NO CRACKS OR WELDING ON BOOM OR DIPPER FIXED FRAME UNDER CARRIAGE MACHINE WHEN WE ARE FINISHED WILL BE AS GOOD AS NEW AND READY FOR WORK ",
      imageUrl: "http:\/\/www.resaleweekly.com\/media\/catalog\/product\/1\/4\/14c146d681087b6_1408116116.jpg",
      listPrice: 55000.00,
      minimumPrice: 0,
      terms: "",
      title: "CATERPILLAR 375L"
    }
  },
  bad : function() {
    
    return {
      companyId: null,
      //itemId: "259853",
      itemUrl: "http:\/\/www.resaleweekly.com\/catalog\/product\/view\/id\/259853",
      mobileItemUrl: "http:\/\/www.resaleweekly.com\/catalog\/product\/view\/id\/259853",
      transactionId: "random",
      //currencyCode: "GBP",
      description: "IN VERY GOOD WORKING CONDITION NEW DASH MONITOR BEING FITTED NEW TRACK SPADS BEING FITTEDNEW IDLERS BEING FITTED FULLY SERVICED LARGE ROCK BUCKETTRACK CHAINS 80% SPROCKETS 80% NO CRACKS OR WELDING ON BOOM OR DIPPER FIXED FRAME UNDER CARRIAGE MACHINE WHEN WE ARE FINISHED WILL BE AS GOOD AS NEW AND READY FOR WORK ",
      imageUrl: "http:\/\/www.resaleweekly.com\/media\/catalog\/product\/1\/4\/14c146d681087b6_1408116116.jpg",
      listPrice: 55000.00,
      minimumPrice: 0,
      terms: "",
      title: "CATERPILLAR 375L"
    }
  }
};

module.exports = function(responseName){
  
  return responses[responseName]();
};