var json;

function tableload(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function callbackhandler(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            json = JSON.parse(xhttp.responseText);
            handleResponse();
        }
    };
    xhttp.open("GET", "../data/data.json", true);
    xhttp.send();
}

function handleResponse(){

    //append table rows with their values from the JSON file
        for (var i = 0; i < json.length; i++) {
            var table = document.getElementById("playertable");
            var row = table.insertRow(i+1);

            //isAlreadyInTable(lookUpIndex) doesnt work yet
            //if(!isAlreadyInTable(i)) {
                row.insertCell(0).innerHTML = json[i].firstname + " " + json[i].surname;
                row.insertCell(1).innerHTML = json[i].team;
                row.insertCell(2).innerHTML = json[i].headcoach;
                row.insertCell(3).innerHTML = json[i].asisstantcoach;
                row.insertCell(4).innerHTML = json[i].position;
                row.insertCell(5).innerHTML = json[i].isActive;
                row.insertCell(6).innerHTML = json[i].number;
                row.insertCell(7).innerHTML = json[i].year;
            //}
        }
}


/*
*
* Check if a player is already in the table doesnt work
*
function isAlreadyInTable(lookUpIndex){
    var tableRows = document.getElementById("playertable").rows;

    for(var index = 0; index < tableRows.length; index++){
        if(((json[lookUpIndex].firstname + " " + json[lookUpIndex].surname) == tableRows[index].cells[0])
            && (json[lookUpIndex].year == tableRows[index].cells[7]))
            return true;
    }

    return false;

}
*/

function updateTabs(source) {
        var id;
        var del;

        //checks the source
        if (source === "all") {
            id = "allplayers";
            del = "myfav";
        }else{
            id = "myfav";
            del = "allplayers";
        }

        var element = document.getElementById(id);
        var element2 = document.getElementById(del)
        var nameOfClass = element.className;

        //split the classes from one another
        var classArrayOfEl = nameOfClass.split(" ");
        nameOfClass = element2.className;
        var classArrayOfEl2 = nameOfClass.split(" ");

        //checking which if a different tab got clicked
        if (classArrayOfEl.length == 1) {
            element.classList.add("selected");

            if(classArrayOfEl2.length == 2) {
                element2.classList.remove("selected");
            }
            updateTable(id);
        }

}

function updateTable(source){

        var rows = document.getElementById("playertable").rows;
        var amountOfRows = rows.length;

        if(source === "allplayers"){

            //set non favorites to visible if they are set to none
            for(var j = 0; j < amountOfRows-1;j++){
                if(!json[j].isFavorite){
                    if(rows[j+1].style.display == 'none'){
                        rows[j+1].style.display = '';
                    }
                }
            }
        }else{

            //set non favorite to invisible if they aren't already
            for(var k = 0; k < amountOfRows-1;k++){
                if(!json[k].isFavorite){
                    if(rows[k+1].style.display == ''){
                        rows[k+1].style.display = 'none';
                    }
                }
            }
        }
}