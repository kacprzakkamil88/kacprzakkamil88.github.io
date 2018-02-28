 function porownanie() {


     var buyArrow = $("#buy-arrow");
     var currentBuyPrice = parseFloat($("#buy").html());

     var sellArrow = $("#sell-arrow");
     var currentSellPrice = parseFloat($("#sell").html()); // ----- trzeci etap warunki



     // to można niżej ogarnąc w funkcje ---------------------------====-----====-----


     $.getJSON("https://blockchain.info/pl/ticker", function (data) { // -----------zaczyna sięod tego - podpianie
         //    console.log(data);
         //    console.log(data.PLN.buy);
         //    console.log(data.PLN.sell);

         $("#buy").html(data.PLN.buy); // żeby sią napisywalo jest html ??? ----- wyjęcie tego co chce----
         $("#sell").html(data.PLN.sell);



         // robienie strzałek    
         if (currentBuyPrice > parseFloat(data.PLN.buy)) {
             buyArrow.removeAttr("class").addClass("fa fa-arrow-down");
         } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
             buyArrow.removeAttr("class").addClass("fa fa-arrow-up");
         } else {
             buyArrow.removeAttr("class").addClass("fa fa-minus-square-o");
         }



         if (currentSellPrice > parseFloat(data.PLN.sell)) {
             sellArrow.removeAttr("class").addClass("fa fa-arrow-down");

         } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
             sellArrow.removeAttr("class").addClass("fa fa-arrow-up");
         } else {
             sellArrow.removeAttr("class").addClass("fa fa-minus-square-o");
         }


     });




 };

 porownanie();
 setInterval(porownanie, 5000);