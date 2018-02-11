var wynik = {
    "osoby" : [
                {
            imie : "Adam",
            nazwisko: "Nazwisko",
            wzrost: "182",
            zainteresowania: [
                {nazwa: "podróże"},
                {nazwa: "sport"},
            ]
            
        },
            {
            imie : "Marcin",
            nazwisko: "Konopka",
            wzrost: "172",
            zainteresowania: [
                {nazwa: "motoryzacja"},
                {nazwa: "szachy"},
            ]
            
        }
    ]
}
    
    



//console.log(jsonOsoby);




wynik.osoby.forEach( function( element, index) {
   console.log( element.imie );
    console.log( element.nazwisko);
    console.log( element.wzrost);
    console.log(element.zainteresowania);
    
    element.zainteresowania.forEach( function( z, ind ){
        console.log(element.zainteresowania);
    });
});