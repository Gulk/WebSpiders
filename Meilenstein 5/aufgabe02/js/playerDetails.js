var request = new XMLHttpRequest();
var jSonArray;

function loadTable() {
    request.open("GET", "../data/data.json", true);
    request.onreadystatechange = callbackHandler;
    request.send();
}

function callbackHandler() {
    if ((request.readyState == 4) && (request.status == 200) && (request.responseText != null)) {
        jSonArray = JSON.parse(request.responseText);
        populateTable();
    }
}

function populateTable() {

    for (var i = 0; i < jSonArray.length; i++) {
        var table = document.getElementById("playertable");
        var row = table.insertRow(i + 1);

        row.insertCell(0).innerHTML = jSonArray[i].firstname + " " + jSonArray[i].surname;
        row.insertCell(1).innerHTML = jSonArray[i].team;
        row.insertCell(2).innerHTML = jSonArray[i].headcoach;
        row.insertCell(3).innerHTML = jSonArray[i].asisstantcoach;
        row.insertCell(4).innerHTML = jSonArray[i].position;
        row.insertCell(5).innerHTML = booleanToTextConverter(jSonArray[i].isActive);
        row.insertCell(6).innerHTML = jSonArray[i].number;
        row.insertCell(7).innerHTML = jSonArray[i].year;
    }
}

function booleanToTextConverter(isTrue) {
    if (isTrue) {
        return "Ja";
    } else {
        return "Nein";
    }
}

function showAllPlayer() {
    selectAllPlayer();
    renderFavOnly(false);

}

function showFavPlayer() {
    selectFav();
    renderFavOnly(true);

}

function selectFav() {
    document.getElementById("myfav").classList.add("selected");
    document.getElementById("allplayers").classList.remove("selected");
}

function selectAllPlayer() {
    document.getElementById("allplayers").classList.add("selected");
    document.getElementById("myfav").classList.remove("selected");
}


function renderFavOnly(favOnly) {
    var rows = document.getElementById("playertable").rows;

    for (var i = 0; i <= jSonArray.length; i++) {
        if (!jSonArray[i].isFavorite) {
            if (favOnly) {
                rows[i + 1].style.display = 'none';
            } else {
                rows[i + 1].style.display = '';
            }
        }
    }
}