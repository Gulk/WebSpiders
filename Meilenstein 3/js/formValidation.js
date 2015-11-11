var element = document.getElementById('submit');
element.addEventListener('click', validateForm);

function validateForm() {

    var vorname = document.playerentry.vorname;
    var name = document.playerentry.name;
    var verein = document.playerentry.verein;
    var headcoach = document.playerentry.hcoach;
    var assistcoach = document.playerentry.acoach;
    var jahr = document.playerentry.jahr;
    var nummer = document.playerentry.number;
    var getsFocus = "non";

    if (!(validateCorrectLetters(vorname.value) &&
        validateCorrectLetters(name.value) &&
        validateCorrectLetters(verein.value) &&
        validateCorrectLetters(headcoach.value) &&
        validateCorrectLetters(assistcoach.value) &&
        validateCorrectNumbers(jahr.value) &&
        validateCorrectNumbers(nummer.value)))
    {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

        if (!validateCorrectLetters(vorname.value)) {
            markBorder(vorname, "#FF0000");
            getsFocus = vorname;
        } else {
            markBorder(vorname, "none");
        }
        if (!validateCorrectLetters(name.value)) {
            markBorder(name, "#FF0000");
            if (getsFocus === "non")
                getsFocus = name;
        } else {
            markBorder(name, "none");
        }
        if (!validateCorrectLetters(verein.value)) {
            markBorder(verein, "#FF0000");
            if (getsFocus === "non")
                getsFocus = verein;
        } else {
            markBorder(verein, "none");
        }
        if (!validateCorrectLetters(headcoach.value)) {
            markBorder(headcoach, "#FF0000");
            if (getsFocus === "non")
                getsFocus = headcoach;
        } else {
            markBorder(headcoach, "none");
        }
        if (!validateCorrectLetters(assistcoach.value)) {
            markBorder(assistcoach, "#FF0000");
            if (getsFocus === "non")
                getsFocus = assistcoach;
        } else {
            markBorder(assistcoach, "none");
        }
        if (!validateCorrectNumbers(jahr.value)) {
            markBorder(jahr, "#FF0000");
            if (getsFocus === "non")
                getsFocus = jahr;
        } else {
            markBorder(jahr, "none");
        }
        if (!validateCorrectNumbers(nummer.value)) {
            markBorder(nummer, "#FF0000");
            if (getsFocus === "non")
                getsFocus = nummer;
        } else {
            markBorder(nummer, "none");
        }
        getsFocus.focus();
        getsFocus = "non";
        return false;
    } else {
        return true;
    }
}
    function validateCorrectLetters(textfield){
        return textfield.match(/^[A-Za-zÄ-Üä-ü]+$/);
    }

    function validateCorrectNumbers(numberfield){
        if(numberfield === jahr){
            return numberfield.match(/^[0 < 2015]+$/);
        }else{
            return numberfield.match(/^[4 < 15]+$/);
        }
    }

    function markBorder(victim, colour){
        if(colour === "none"){
            victim.style.border = colour;
        }else{
            victim.style.border = "solid" + colour;
        }
    }