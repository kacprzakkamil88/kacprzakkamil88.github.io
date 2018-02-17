"use strict"

var mainHeader = document.getElementById("main-header");

mainHeader.innerHTML = "Treśc nagłówka"; //dodaje tylko treśc//

mainHeader.outerHTML= "<p>Treśc nagłóka</p>"; //dodaje znaczniki w html //


var link = document.getElementsByClassName("link")[0]; // przypisanie pierwszego linku do zmiennej
console.log(link);

//link.href = "http://akademia108.pl"; // nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; // zmienia klase

//console.log(link.classList);

link.classList.add("nowa-nowa-klasa");

//zmienianie styli w javiescrip ale lepiej nie ale można //

link.style.backgroundColor = "red";