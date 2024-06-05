
//script Mario
function calcolaPunteggio() {
  // Oggetto con le risposte corrette
  var risposteCorrette = {
      q1: 'c',
      q2: 'b',
      q3: 'b',
      q4: 'a',
      q5: 'c',
      q6: 'a',
      q7: 'b',
      q8: 'a',
      q9: 'b',
      q10: 'b'
  };

  let punteggio = 0;


  for (let i = 1; i <= 10; i++) {

      var domanda = `q${i}`;
      //  Utilizzo del metodo document.querySelector() per selezionare gli elementi Quiz del DOM
      var rispostaSelezionata = document.querySelector(`input[name="${domanda}"]:checked`);

      // Se esiste una risposta selezionata e questa è corretta, incrementa il punteggio
      if (rispostaSelezionata && rispostaSelezionata.value === risposteCorrette[domanda]) {
          punteggio++;
      }
  }

  // Mostra il punteggio ottenuto
  document.getElementById('result').innerText = `Hai risposto correttamente a ${punteggio} domande su 10.`;
}
