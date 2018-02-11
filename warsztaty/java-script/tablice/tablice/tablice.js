//tablice robi sie z nawiasami kwadratowymi a i liczenie jest od 0 w konsoli to dobrze widac//

var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

//console.log( imiona[2]);

console.log(imiona);

imiona [5] = "Monika";
imiona [6] = "Marcin";

console.log(imiona);
//push dodaje lementy na końcu tablicy i z utomatu przypisze koljeny indeks
imiona.push("Mikołaj", "Adam");

console.log(imiona);

//pop usuwa element tylko ostatni

var usunietyElement=imiona.pop();
console.log(imiona);

//na początku tablicy unshift wstawianie
imiona.unshift("Kasia", "Michał");


//console.log(imiona);

//usuwanie elementu z początku tablicy funkcją shift
imiona.shift();

//console.log(imiona);

//lenght sprawdza ilość elementów



console.log(imiona.length);

// join rozbija tablice oddziela - bez parametru domyślnie wstawi przecinek


//var tablicaJakoTekst = imiona.join("------+-----");
//console.log(tablicaJakoTekst);

//metoda reverse odwraca elementy tablicy

//var imionaReverse = imiona.reverse();
//console.log(imionaReverse);

// metoda sort to co robi????? A no sortuje tablice

//var posortowana = imiona.sort();
//console.log(posortowana);



//








