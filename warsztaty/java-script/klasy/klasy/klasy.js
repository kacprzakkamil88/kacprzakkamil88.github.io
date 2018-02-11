// klasy zaczynamy wielką literę a tutaj będziemy robic portal ogłoszenie
// funkcja constructor jest niezbędna ------------ ona zawiera takie stałe elementy z ogłoszenia
// nie zapomnieć ----------- bez polskich znaków

class Ogloszenie {
    constructor (tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    
    wyswietlOgloszenie () {            // to jest metoda
        console.log( "Ogłoszenie: Tytuł: " + this.tytul + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this.cena );
    }
}

var ogloszenie1 = new Ogloszenie("Sprzedam Opla", "Świeżynka od starego Niemca", "605-666-677", 16000);
ogloszenie1.wyswietlOgloszenie(); // wywyłuje to





var ogloszenie2= new Ogloszenie( "Sprzedam Audi", "Licznik nie cofany", "666-333-222", 20000);

ogloszenie2.wyswietlOgloszenie();

console.log( typeof ogloszenie1 ); // no i takie coś 




