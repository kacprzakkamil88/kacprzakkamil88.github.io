function ajax( method, url ) {
    
    
    
    var httpReq = new XMLHttpRequest();
    
    
    httpReq.open(method, url );
    
    
    
   
    httpReq.onreadystatechange = function() {
        
        
        if ( httpReq.readyState == 4 ) {
            
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);

                console.log(returnData);     
            
            
                httpReq = null;
                
            }
            
        }
    
    }

}

//$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
//    //console.log(data);
//    
//    $("body").append ("<p>" + data.firma + "</p>");
//    $("body").append ("<p>" + data.imie + "</p>");
//    $("body").append ("<p>" + data.nazwisko + "</p>");
//    $("body").append ("<p>" + data.zawod + "</p>");
//    
//    
//});


$("button").click (function (){
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
    //console.log(data);
    
    $("body").append ("<div#dane-programisty>" + "firma - " + data.firma + "</div>" + "<br><br>" );
    $("body").append ("<div#dane-programisty>" + "imie - " + data.imie + "</div>" + "<br><br>");
    $("body").append ("<div#dane-programisty>" + "nazwisko - " + data.nazwisko + "</div>" + "<br><br>");
    $("body").append ("<div#dane-programisty>" + "zawod - " + data.zawod + "</div>" + "<br><br>");
    
    
});
    
    
});