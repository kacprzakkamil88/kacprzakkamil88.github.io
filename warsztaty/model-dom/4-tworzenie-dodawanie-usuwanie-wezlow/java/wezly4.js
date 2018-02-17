"use strict"

// poniżej jest istiejący węzeł // 
var istniejącyWezel= document.getElementById('parFirst').children[3];


// tworzenie wezła nie sprawi, że znajdzie się on stronie // 

var newElement = document.createElement ("p"); // tworzy elemen p czyli tworzy paragraf 

console.log(newElement);



// tworzymy moda tekstowego //

var newElementContent = document.createTextNode("To jest oto paragraf");

console.log(newElementContent);

//wrzuci dziecko//
newElement.appendChild(newElementContent);
//console.log(newElement); // wkłada tekst w "p" //////////////////////////////////////////////


//dopięcie do strony czyli to coś pojawi się na stronie - to zawsze musi być dwuetapowe//
istniejącyWezel.appendChild(newElement);


//usuwanie dziecka//

//istniejącyWezel.removeChild(newElement);// nie ma opcji after//

var parFirstDiv = document.getElementById("parFirst");
parFirstDiv.replaceChild(newElement, istniejącyWezel);





//var allLinks = document.querySelectorAll("a"); // ----> daje linki z strony
//console.log(allLinks); // jak zrobić tablice ---> Array.form("nodeList");

// jak wsadzić after z użycueme "before" //

var allLinks = document.getElementsByTagName ("a");
for (var i = 0; i < allLinks.length; i++) {
    var br = document.createElement("br");
    
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);


allLinks[i].removeAttribute("class"); 
}
