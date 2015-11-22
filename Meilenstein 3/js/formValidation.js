var element = document.getElementById('submit');
element.addEventListener('click', validateForm);

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
    return regEx(numberfieldValue.match(/^([4-9]|1[0-5])$/)); // 4-9, 10-15
}

function validateCorrectYearNumber(numberfieldValue) {
    return regEx(numberfieldValue.match(/^([0-9]|[0-9][0-9]|[0-9][0-9][0-9]|200[0-9]|201[0-5])$/)); // 0-2015
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
        victim.style.border = colour;
    } else {
        victim.style.border = "solid" + colour;
    }
}