// każdy obrót pętli to jedna iteracja


// for (wyrażnie początkowe; wyrażenie warunkowe ; wyrażeni modyfikujące ) i na koniec console.log




//var ileRazy = 30;
//
//for ( var i = 0; i < ileRazy; i++ ) {
//    var iteracja = i + 1;
 //   console.log("Iteracja pętli nr" + iteracja);
//}




var tablica =["Audi", "Opel", "Honda", "Nissan", "Mazda"];

//for (var i = 0//; i < tablica.length; i++) {
//    console.log( "Tablica! Index = " + i + ", wartość = " + tablica[i]);
//}

// u dołu inny zapis do tej pętelki w środku zamiast elemenTablicy można napisać co się chce by nie zapomnie żeby białe takie samo

tablica.forEach ( function ( elementTablicy, indexTablicy ) {
    
    //if ( elementTablicy == "Mazda") {
    // 
    
    console.log ( "Index: " + indexTablicy + ", wartość: " + elementTablicy );
});

// funkcja continue

//for ( var i=0; i < tablica.length; i++){
  //  if( i == 2){
    //    break;
    //}
    //console.log( i, tablica[i] )
//}

//for ( var i=0; i < tablica.length; i++){
  //  if( i == 2){
    //    continue;
    //}
    //console.log( i, tablica[i] )
//}
// daje tylko pewne elementy
//for( var i = 0; i < tablica.length; i++) {
  //  if (i == 2 || i ==4) {
    //    continue;
    //}
//    
//    console.log( i, tablica[i] );
//}





// pętla while --------------------------------------------------------------------------------------


var iter = 0;
while( iter < 20 ) {
    console.log( iter );
    ++iter;
}

