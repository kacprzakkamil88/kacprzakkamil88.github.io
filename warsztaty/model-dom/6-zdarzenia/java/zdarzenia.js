"use strict"

//funkcja callback to zasadniczo nazwa ogólna 
//mouseów jest od groma ----> paczaj w goggle <----------
//addEventListener ---> przeglądarka to baba wścibska siedząca w oknie i wszystko obserwująca - c0ś sie stanie to dzwoni na psy
// parametr e - czyli event

//sposyby osadzani

//var secondLink = document.getElementsByTagName("a")[1];
//
////console.log(second.link);
//
function alarm(e) {
    e.preventDefault();
    console.log ("kliknieto kolejny link");
    thirdLink.style.backgroundColor = "orange";
    console.log(e.type);
    
    
}

//secondLink.onclick(e.type);
//    
//}
//
//secondLink.onclick = alarm;



// drugi event

var thirdLink = document.getElementsByTagName("a")[2];

thirdLink.addEventListener("click", alarm);

thirdLink.removeEventListener("click", alarm); // można też tak usuwać --- 









//
//var mainHeader = document.getElementById("main-header");
//
//function resize(e) {
//    if (e.type == "mouseover") {
//        mainHeader.style.fontSize = "70px"; // zmienianie czcionki stylu 
//    } else {
//        mainHeader.style.fontSize = "inherit"; // przywraca domyślną
//    }
//}
//
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;


// zatrzymanie eventów //

function klikHeader () {
    console.log("kliknales w header");
}

document.getElementsByTagName("header") [0].onclick = klikHeader;

function klikH1(e) {
    e.stopPropagation (); // zatrzymanie zdarzenia 
    console.log("kilknąłeś w h1");
}

document.getElementsByTagName("h1") [0].onclick = klikH1;

// zdarzenie idą od doły --- poaczaj plik html a strona ---- 
