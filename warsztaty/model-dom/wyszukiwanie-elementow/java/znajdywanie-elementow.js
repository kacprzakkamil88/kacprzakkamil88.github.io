"use strict"

//na html collection for each nie działa//

//szukanie po id//

var parFirst = document.getElementById("parFirst");
console.log(parFirst);

//po klasie//
var linki = document.getElementsByClassName("superlink");
console.log(linki);

//po tagach//
var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

// po id// po 
var divPoID = document.querySelector("#parSecond");
console.log(divPoID);

//po selektorze//

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log (pierwszyLinkPoSelektorze);

