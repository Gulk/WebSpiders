var request = new XMLHttpRequest();


function manipuliere() {

    // URL fürRequest festlegen
    request.open("GET", "http://martinakraus.net/data.json");   // request.status = 0 ???

    // URL fürRequest festlegen
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