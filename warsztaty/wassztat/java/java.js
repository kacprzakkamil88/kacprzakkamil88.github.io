var tekst = "jakis tekst";


var paragraf = document.createElement("p");

document.getElementById("kontener").appendChild(paragraf);

//paragraf.appendChild(tekst);
paragraf.innerHTML = tekst;

console.log(document.getElementById("string").innerHTML); // jeśli będzie span to bierze i znaczniki <span>>+++</span>





//przekazanie do body /// -----------------

var paragraf2 = document.createElement("p");

document.body.appendChild(paragraf2);

paragraf2.innerHTML = document.getElementById("string").innerHTML;

