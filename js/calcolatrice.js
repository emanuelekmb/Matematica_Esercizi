// JavaScript source code
var primoNum = 0;
var segnoCorrente = null;
var secondoNum = null;
function writeNumber(number) {
   
    var divDisplay = document.getElementById("display"); // div

    var displayContenuto = divDisplay.innerHTML; //assegno testo del div alla variabile


    if (displayContenuto == "0") {
        divDisplay.innerHTML = number;
    } else if (segnoCorrente != null && secondoNum == null) {
        divDisplay.innerHTML = number;
        secondoNum = number;
    } else if ( secondoNum != null) {
        secondoNum = "" + displayContenuto + number;
        divDisplay.innerHTML = secondoNum;
    } else {
        divDisplay.innerHTML = displayContenuto + number;

    }

}
function writeSign(sign) {
    var divDisplay = document.getElementById("display");
    var displayContenuto = divDisplay.innerHTML;

    if (segnoCorrente == null) {
        divDisplay.innerHTML = displayContenuto + sign;
        segnoCorrente = sign;
        primoNum = displayContenuto;
    }
}

function reset() {

    var display = document.getElementById("display");
    display.innerHTML = 0;
    segnoCorrente = null;
    primoNum = 0;
    secondoNum = null;
}

function calculate() {
    //se non ci sono i numeri e il segno esco, se ci sono controllo che segno c'è e faccio l'operazione giusta
    if (primoNum == null || segnoCorrente == null || secondoNum == null) {
        return;
    } else {
        var divDisplay = document.getElementById("display");
        primoNum = parseFloat(primoNum);
        secondoNum = parseFloat(secondoNum);
        var risultato;
        switch (segnoCorrente) {
            case "/":
                risultato = primoNum / secondoNum;
                break;
            case "X":
                risultato = primoNum * secondoNum;
                break;
            case "+":
                risultato = primoNum + secondoNum;
                break;
            case "-":
                risultato = primoNum - secondoNum;
                break;
            default:
                alert("errore");
                return;
        }
        divDisplay.innerHTML = risultato;
        primoNum = risultato;
        segnoCorrente = null;
        secondoNum = null;
    } 
}
function writeComma() {
    var divDisplay = document.getElementById("display");
    
    if (!divDisplay.innerHTML.includes(".") && divDisplay.innerHTML != "Infinity") {
        divDisplay.innerHTML = divDisplay.innerHTML + ".";
    }
   
}