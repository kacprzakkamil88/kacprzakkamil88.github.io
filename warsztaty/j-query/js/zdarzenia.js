"use strict";

$("#first").mouseenter(function() {
    $("#second").toggle(function() {
        $(this).css({"background-color": "yellow", "text-decoration": "underline"});
        
    });
});