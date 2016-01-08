var vorname;
var nachname;
var verein;
var headcoach;
var assistcoach;
var nummer;
var jahr;

var getsFocus;

function validateForm() {

    vorname = document.getElementById("vorname");
    nachname = document.getElementById("nachname");
    verein = document.getElementById("verein");
    headcoach = document.getElementById("hcoach");
    assistcoach = document.getElementById("acoach");
    nummer = document.getElementById("number");
    jahr = document.getElementById("jahr");
    getsFocus = null;

    if (!allInputsAreValid()) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

        textValidator(vorname);
        textValidator(nachname);
        textValidator(verein);
        textValidator(headcoach);
        textValidator(assistcoach);

        numberValidator(nummer, validateCorrectPlayerNumber(nummer.value));
        numberValidator(jahr, validateCorrectYearNumber(jahr.value));

        focusForm();

        return false;
    } else {
        return true;
    }
}

function focusForm() {
    if (getsFocus != null) {
        getsFocus.focus();
        getsFocus = null;
    }
}

function allInputsAreValid() {
    return (validateCorrectLetters(vorname.value) && validateCorrectLetters(nachname.value) &&
    validateCorrectLetters(verein.value) && validateCorrectLetters(headcoach.value) &&
    validateCorrectLetters(assistcoach.value) && validateCorrectPlayerNumber(nummer.value) &&
    validateCorrectYearNumber(jahr.value));
}

function textValidator(field) {
    if (!validateCorrectLetters(field.value)) {
        markBorder(field, "#FF0000");
        if (getsFocus == null) {
            getsFocus = field;
        }

    } else {
        markBorder(field, "none");
    }
}

function numberValidator(field, isCorrect) {
    if (!isCorrect) {
        markBorder(field, "#FF0000");
        if (getsFocus == null) {
            getsFocus = field;
        }
    } else {
        markBorder(field, "none");
    }
}

function validateCorrectLetters(textfieldValue) {
    return regEx(textfieldValue.match(/^[A-Za-zÄÖÜäöüß]+$/));
}

function validateCorrectPlayerNumber(numberfieldValue) {
    return (3 < numberfieldValue && numberfieldValue < 16); // 4-15
}

function validateCorrectYearNumber(numberfieldValue) {
    var aktuellesJahr = new Date().getFullYear();
    if (numberfieldValue == '' || (numberfieldValue < 0 && numberfieldValue > aktuellesJahr))
        return false;
    else
        return true;// 0-2015
}

function regEx(regResult) {
    if (regResult == null) {
        return false;
    } else {
        return true;
    }
}

function markBorder(victim, colour) {
    if (colour === "none") {
        victim.style.boxShadow = "";
        // victim.style.border = colour;
    } else {
        victim.style.boxShadow = "0 0 0 2px #FF0000 inset";
        // victim.style.border = "solid" + colour;
    }
}