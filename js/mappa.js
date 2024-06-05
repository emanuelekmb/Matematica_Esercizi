var currentCheckpoint = 1; 

function showQuestion(point) {
    // inizio domande
    if (point === currentCheckpoint) {
        var questionContainer = document.getElementById('question-container');
        var questionText = document.getElementById('question');
        var answerInput = document.getElementById('answer');

        if (point === 1) {
            questionText.textContent = "Qual è l'unico numero primo pari? ";
        } else if (point === 2) {
            questionText.textContent = "Quanto fa 17 + 84?";
        } else if (point === 3) {
            questionText.textContent = "Qual è il valore di Pi greco?";
        } else if (point === 4) {
            questionText.textContent = "Come si chiama un angolo di 90°?";
        } else if (point === 5) {
            questionText.textContent = "Quanti lati ha un esagono?";
        } else if (point === 6) {
            questionText.textContent = "2 - 3 - 5 - 8 - ?";
        }

        answerInput.value = '';
        questionContainer.style.display = 'block';
    }
}
//inizio risposte
function checkAnswer() {
    var answerInput = document.getElementById('answer').value.toLowerCase();
    var correctAnswer = '';
    var alternativeAnswer = '';

    if (currentCheckpoint === 1) {
        correctAnswer = '2';
        alternativeAnswer = 'due';
    } else if (currentCheckpoint === 2) {
        correctAnswer = '101';
        alternativeAnswer = 'centouno';
    }  else if (currentCheckpoint === 3) {
        correctAnswer = '3.14';  
        alternativeAnswer = '3,14';
    } else if (currentCheckpoint === 4) {
        correctAnswer = 'retto';
        alternativeAnswer = 'angolo retto';
    }  else if (currentCheckpoint === 5) {
        correctAnswer = 'sei';
        alternativeAnswer = '6';
    } else if (currentCheckpoint === 6) {
        correctAnswer = '12';
        alternativeAnswer = 'dodici';
    }

    if (answerInput === correctAnswer || answerInput == alternativeAnswer) {
        alert('Risposta corretta!');
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('point' + currentCheckpoint).style.display = 'none';

        currentCheckpoint++;

        if (currentCheckpoint === 2) {
            document.getElementById('point2').style.display = 'block';
        } else if (currentCheckpoint === 3) {
            document.getElementById('point3').style.display = 'block';
        } else if (currentCheckpoint === 4) {
            document.getElementById('point4').style.display = 'block';
        } else if (currentCheckpoint === 5) {
            document.getElementById('point5').style.display = 'block';
        } else if (currentCheckpoint === 6) {
            document.getElementById('point6').style.display = 'block';
        } else if (currentCheckpoint === 7) {
            document.getElementById('point7').style.display = 'block';
            
        }
    } else {
        alert('Risposta sbagliata, riprova.');
    }
}

function showTreasure() {
    alert("HAI TROVATO IL TESORO");
    document.getElementById('point7').style.display = 'none';
    document.getElementById('treasure').style.display = 'block';

}
