"use strict"

// zablokować id///////

var formularz = document.getElementById("input");

//function pobierzImie(event) {
//    event.preventDefault();
//    console.log("działa: ");
//
//    var form = document.getElementById("formularz");
//    console.log(form);
//    for (var i = 0; i < from.length; i++) {
//        console.log(form.elements[i]).value);
//    if (form.elements[i]).value != "Submit") {
//    console.log(form.elements[i].value);
//}
//}
//}


// zadanie można zrobić na kilka sposób //////////// aha coś nie tak z nawiasami
// powinno wyświetlać imię i nazwisko bez przeładowanie strony po 

// inny sposób przez pobranie id // 
function pobierzImie(event) {
    event.preventDefault();
    console.log("działa")

    var form = document.getElementById("formularz");
    console.log(form);
    for (var i = 0; i < form.length; i++) {
        console.log(form.elements[i].value);
        if (form.elements[i].value != "Submit") {
            console.log(form.elements[i].value);
        }
    }

}