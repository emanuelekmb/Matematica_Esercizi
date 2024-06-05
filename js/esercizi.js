// script Vincenzo-->

  // variabile per aggiornare il punteggio
  var punteggio = 0;

  // flag booleana per ogni esercizio
  var esercizio1RispostaCorretta = false;
  var esercizio2RispostaCorretta = false;
  var esercizio3RispostaCorretta = false;
  var esercizio4RispostaCorretta = false;
  var esercizio5RispostaCorretta = false;
  var esercizio6RispostaCorretta = false;
  var esercizio7RispostaCorretta = false;
  var esercizio8RispostaCorretta = false;
  var esercizio9RispostaCorretta = false;
  var esercizio10RispostaCorretta = false;
 

  // funzione per controllare la scelta multipla, passando come argomenti l'esercizio e la risposta corretta
  function controllaSceltaMultipla(esercizio, rispostaCorretta) {
    // seleziono l'elemento del DOM che contiene la risposta
    var rispostaElement = document.getElementById('risposta' + esercizio);
    // seleziono la risposta scelta dall'utente, tramite il selettore CSS che corrisponde al nome dell'input radio selezionato
    var risposta = document.querySelector('input[name="esercizio' + esercizio + '"]:checked');

    // se l'utente non ha selezionato nessuna risposta, mostro un messaggio di errore
    if (risposta == null) {
      rispostaElement.innerHTML = "Seleziona una risposta.";
      rispostaElement.style.color = 'red';
      rispostaElement.style.fontSize = '20px';
      rispostaElement.style.fontWeight = 'bold';
      rispostaElement.style.marginTop = '10px';
    } else {
      risposta = risposta.value;
      if (risposta == rispostaCorretta) {
        // controllo se l'utente ha già risposto correttamente a questa domanda
        if (esercizio == 1 && !esercizio1RispostaCorretta) {
          esercizio1RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 2 && !esercizio2RispostaCorretta) {
          esercizio2RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 3 && !esercizio3RispostaCorretta) {
          esercizio3RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 4 && !esercizio4RispostaCorretta) {
          esercizio4RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 5 && !esercizio5RispostaCorretta) {
          esercizio5RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 6 && !esercizio6RispostaCorretta) {
          esercizio6RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 7 && !esercizio7RispostaCorretta) {
          esercizio7RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 8 && !esercizio8RispostaCorretta) {
          esercizio8RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 9 && !esercizio9RispostaCorretta) {
          esercizio9RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 10 && !esercizio10RispostaCorretta) {
          esercizio10RispostaCorretta = true;
          punteggio++;
        }

        //stile risposta corretta e sbagliata
        rispostaElement.innerHTML = "Corretto!";
        rispostaElement.style.color = 'green';
        rispostaElement.style.fontSize = '20px';
        rispostaElement.style.fontWeight = 'bold';
        rispostaElement.style.marginTop = '10px';
      } else {
        rispostaElement.innerHTML = "Sbagliato. Riprova.";
        rispostaElement.style.color = 'red';
        rispostaElement.style.fontSize = '20px';
        rispostaElement.style.fontWeight = 'bold';
        rispostaElement.style.marginTop = '10px';
      }
      document.getElementById('punteggio').innerHTML = punteggio;
      document.getElementById('punteggio').style.fontSize = '20px';
      document.getElementById('punteggio').style.fontWeight = 'bold';
    }
  }

  // funzione per controllare il riempimento di un input, passando come argomenti l'esercizio e la risposta corretta, con stessi controlli e passaggi della funzione precedente
  function controllaRiempimento(esercizio, rispostaCorretta) {
    var risposta = document.getElementById('esercizio' + esercizio).value;
    var rispostaElement = document.getElementById('risposta' + esercizio);
    if (risposta == "") {
      rispostaElement.innerHTML = "Inserisci una risposta.";
      rispostaElement.style.color = 'red';
      rispostaElement.style.fontSize = '20px';
      rispostaElement.style.fontWeight = 'bold';
      rispostaElement.style.marginTop = '10px';
    } else {
      if (risposta == rispostaCorretta) {
        // controllo se l'utente ha già risposto correttamente a questa domanda
        if (esercizio == 1 && !esercizio1RispostaCorretta) {
          esercizio1RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 2 && !esercizio2RispostaCorretta) {
          esercizio2RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 3 && !esercizio3RispostaCorretta) {
          esercizio3RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 4 && !esercizio4RispostaCorretta) {
          esercizio4RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 5 && !esercizio5RispostaCorretta) {
          esercizio5RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 6 && !esercizio6RispostaCorretta) {
          esercizio6RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 7 && !esercizio7RispostaCorretta) {
          esercizio7RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 8 && !esercizio8RispostaCorretta) {
          esercizio8RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 9 && !esercizio9RispostaCorretta) {
          esercizio9RispostaCorretta = true;
          punteggio++;
        } else if (esercizio == 10 && !esercizio10RispostaCorretta) {
          esercizio10RispostaCorretta = true;
          punteggio++;
        }

        //stile risposta corretta e sbagliata
        rispostaElement.innerHTML = "Corretto!";
        rispostaElement.style.color = 'green';
        rispostaElement.style.fontSize = '20px';
        rispostaElement.style.fontWeight = 'bold';
        rispostaElement.style.marginTop = '10px';
      } else {
        rispostaElement.innerHTML = "Sbagliato. Riprova.";
        rispostaElement.style.color = 'red';
        rispostaElement.style.fontSize = '20px';
        rispostaElement.style.fontWeight = 'bold';
        rispostaElement.style.marginTop = '10px';
      }
      document.getElementById('punteggio').innerHTML = punteggio;
      document.getElementById('punteggio').style.fontSize = '20px';
      document.getElementById('punteggio').style.fontWeight = 'bold';
    }
  }