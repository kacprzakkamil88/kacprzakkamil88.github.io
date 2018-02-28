//window.addEventListener("scroll", function(){
// 
//    
//    var docHeigth = document.documentElement.offsetHeight; //1040
//    var offsetY = this.pageYOffset;  // this oznacza że korzysta z otwartego okna dokumentu // ilosc przeskrolowanych pikseli // 636
//    
//    
//    if (docHeigth === offsetY){
//        
//    }
//    
//    
//});

function ajax(method, url) {



    var httpReq = new XMLHttpRequest();


    httpReq.open(method, url);



    httpReq.onreadystatechange = function () {


        if (httpReq.readyState == 4) {


            if (httpReq.status == 200) {

                var returnData = httpReq.responseText;

//                console.log(returnData);
                httpReq.onsuccess(returnData); // to zawsze musi byc dodane 


                httpReq = null;

            }

        }

    }

    httpReq.onerror = function (msg) {

    }

    httpReq.onsuccess = function (response) {
        var jsonObjArray = JSON.parse(response);
        console.log(jsonObjArray);

        var beginOfData = document.createElement("p");
        var endOfData = document.createElement("p");

        beginOfData.innerHTML = "<br>------------- BEGIN OF DATA --------------<br>";
        endOfData.innerHTML = "<br>------------- END OF DATA --------------<br><br><br>";

        document.body.appendChild(beginOfData);
        
        jsonObjArray.forEach(function(element, index){
            var userID = document.createElement("p");
            userID.innerHTML ="userID: " + element.id;
            document.body.appendChild(userID);
            
            var userName = document.createElement("p");
            userName.innerHTML ="userName: " + element.name;
            document.body.appendChild(userName);
            
            var userEmail = document.createElement("p");
            userEmail.innerHTML ="userEmail: " + element.email;
            document.body.appendChild(userEmail);
        });
        
        
        
        document.body.appendChild(endOfData);
        
    }


    httpReq.send();

}

window.addEventListener("scroll", function () {
    var docHeight = document.documentElement.offsetHeight;
    var offsetY = parseInt(this.innerHeight + this.pageYOffset, 10);
    
    if (docHeight === offsetY) {
        ajax("GET", "https://jsonplaceholder.typicode.com/users");
    }
});