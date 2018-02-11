// zasięg zmiennych funkcji JAVASCRIPT 
// funkcja bez paramaetrów

//var zmienna1 = "Stefan" // zmienna globalna widoczna wszędzie

//function zmiennaLokalna () {
    //var zmienna1 = "Zmienna lokalna Stefan"; //zmienna lokalna widoczna tylko w funkcji
    //var zmienna2= "Zmienna lokalna 2 widoczna tylko w funkcji";
    //console.log(zmienna1);
    
    
//}
//zmiennaLokalna();
//console.log(zmienna1);








//parametry dodajemy 
//unction obliczWynik () {
  //  var wynik = 10 * 15 * 20;
  //  return wynik;
//    
//}

//var rezultatObliczenia = obliczWynik();
//console.log(rezultatObliczenia);



function obliczWynik ( parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3
    return wynik;
    
}

var rezultatObliczenia = obliczWynik( 20, 10, 4 );
console.log(rezultatObliczenia);

var rezultatObliczenia2 = obliczWynik( 30, 20, 5 );
console.log(rezultatObliczenia2);

var rezultatObliczenia3 = obliczWynik( 45, 30, 7 );
console.log(rezultatObliczenia3);




