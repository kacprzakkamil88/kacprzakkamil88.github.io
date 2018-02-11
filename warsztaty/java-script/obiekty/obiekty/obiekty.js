//var osoba = {
  //  imie: "Adam",
//    nazwisko: "Nowacki",
//    wzrost: 182,
    //
  //  
//    wyswietlSzczegoly: function () {
//    
//    console.log( " Osoba to: " + this.imie + this.nazwisko + " " + this.wzrost  );
//}
//}

//console.log(osoba.imie);
//console.log(osoba["naziwsko"]);


//osoba.wyswietlSzczegoly(); 




var imie = "Czesław"

var osoba = {
    imie: "",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    
    wyswietlSzczegoly: function ( paraImie) {
        this.imie = paraImie;
        
    
    console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost  );
}
}

//console.log(osoba.imie);
//console.log(osoba["naziwsko"]);


osoba.wyswietlSzczegoly("Bogumił"); 

// dodanie właściwośc

osoba.wiek = 36;
// można też użyć console.log(osoba.wiek);
osoba.wyswietlWiek = function() {
    console.log(this.wiek);
}

osoba.wyswietlWiek(); // a to można spokojnie wyrzucić

