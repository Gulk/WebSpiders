var request = new XMLHttpRequest();


function manipuliere() {

    // URL fürRequest festlegen
    request.open("GET", "../data/data.json");

    // URL fürRequest festlegen
    request.onreadystatechange = callbackHandler;

    // Request abschicken
    request.send();

}

function callbackHandler() {
    if ((request.readyState == 4) && (request.status == 200) && (request.responseText != null)) {
        var jSonArray = JSON.parse(request.responseText);
        createHTMLTable(jSonArray);
    }
}

//<script type="text/javascript" language="JavaScript" src="../js/playerDetails.js"></script>
/*<script type="text/javascript">
    manipuliere();
</script>
    */

function createHTMLTable(jSonArray) {

    var result = "<table> <tr> <th>Spieler</th> <th>Verein</th> <th>Headcoach</th> <th>Assistantcoach</th> <th>Position</th> <th>Aktiv</th> <th>R&uumlckennummer</th> <th>Geburtsjahr</th> </tr>";

    for (var i = 0; i < jSonArray.length; i++) {
        result += "<tr>";
        result += "<td>" + jSonArray[i].surname + "</td>";
        result += "<td>" + jSonArray[i].team + "</td>";
        result += "<td>" + jSonArray[i].headcoach + "</td>";
        result += "<td>" + jSonArray[i].asisstantcoach + "</td>";
        result += "<td>" + jSonArray[i].position + "</td>";

        if (jSonArray[i].isActive) {
            result += "<td>" + "Ja" + "</td>";
        } else {
            result += "<td>" + "Nein" + "</td>";
        }


        result += "<td>" + jSonArray[i].number + "</td>";
        result += "<td>" + jSonArray[i].year + "</td>";
        result += "</tr>";
    }

    result += "</table>";

    document.getElementById('jsTable').innerHTML = result;


}

function createHTMLTableFavOnly(jSonArray) {

    var FavOnly = new Array();
    var favCounter = 0;

    for (var i = 0; i < jSonArray.length; i++) {
        if (jSonArray[i].isFavorite) {
            FavOnly[favCounter] = jSonArray[i];
            favCounter++;
        }
    }

    createHTMLTable(FavOnly);

}

function updateTable(source) {
    if (source === "all") {
        var allPlayers = document.getElementById("allplayers");
        var nameOfClass = allPlayers.className;
        var classArray = nameOfClass.split(" ");
        if (classArray.length == 1) {
            allPlayers.className += "selected";
            alert(nameOfClass);
        } else {

        }

    } else {
        var myfavourite = document.getElementById("myfav");
    }

}

