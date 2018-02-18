"use strict";
//
//$("#first").mouseenter(function() {
//    $("#second").toggle(function() {
//        $(this).css({"background-color": "yellow", "text-decoration": "underline"});
//        
//    });
//});

// to to to to działa na dole to działa ---------------------------____________|||||||||||||||||||||||||||||||||||||
$("#first").on({
    "mouseover" : function () {
        $(this).css("background-color", "yellow");
    },
    
    "mouseleave" : function () {
        $(this).css("background-color", "green");
    },
    
    "dblclick" : function () {
        console.log("click click");
    }
    
});




