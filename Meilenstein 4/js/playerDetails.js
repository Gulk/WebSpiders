var request = new XMLHttpRequest();


function manipuliere() {

    // URL f�rRequest festlegen
    request.open("GET", "http://martinakraus.net/data.json");   // request.status = 0 ???

    // URL f�rRequest festlegen
    request.onreadystatechange = callbackHandler;

    // Request abschicken
    request.send();

}

function callbackHandler() {

    alert("request.readyState = " + request.readyState + "\n"
        + "request.status = " + request.status + "\n"
        + "request.responseText = " + request.responseText);

    if ((request.readyState == 4) && (request.status == 200) && (request.responseText != null)) {
        alert(request.responseText);

        var myObj = JSON.parse(request.responseText);
        createHTMLTable(myObj);

    }
}

function createHTMLTable(myObj) {
    // TODO convert Player to HTML
}

function updateTable(source){
    if(source === "all"){
        var allPlayers = document.getElementById("allplayers");
        var nameOfClass = allPlayers.className;
        var classArray = nameOfClass.split(" ");
        if(classArray.length == 1){
            allPlayers.className += "selected";
            alert(nameOfClass);
        }else{

        }

    }else{
        var myfavourite = document.getElementById("myfav");
    }

}

