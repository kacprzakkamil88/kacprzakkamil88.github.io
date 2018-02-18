"use strict";
//
//$(function() {
//  //$("#first").hide(1000).show(1000);
//    
//    $("#first").fadeOut(2000).fadeIn(2000);
//    
// //   $("#first").slideUp(2000).slideDown(2000);
//});


function callBackZwrotny () {
    $("#first").animate({
        "font-size": "16px",
        "margin-left": "Opx"
    }, 3000);
    
    console.log("aniamcja jest spoko");
   
};


 callBackZwrotny(); /////// ----------------- TU SIĘ KOŃCZY TA OTO OWA FUNKCYJA ---------------------------------



$("#first").animate({
    "font-size": "54px",
    "margin-left": "250px"
}, 3000, callBackZwrotny);



