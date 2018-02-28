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
 

// to ponizej sprawia że to od razu się wyswietla//

$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
    console.log(data);
    // podpianie gdzie co do czego... po jest robione //
    $("body").append("<p>" +data.userId+ "</p>");
    $("body").append("<p>" +data.userName+ "</p>");
    $("body").append("<p>" +data.userURL+ "</p>");
    
    
});

// to niżej podpina do przyciska z moim id --------------------//

$("button").click(function(){
    
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
    console.log(data);
    // podpianie gdzie co do czego... po jest robione //
    $("body").append("<p>" +data.userId+ "</p>");
    $("body").append("<p>" +data.userName+ "</p>");
    $("body").append("<p>" +data.userURL+ "</p>");
    
    
});

    
});




