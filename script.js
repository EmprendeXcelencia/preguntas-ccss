const questions = [
    {
        question: "¿Cuál era el sistema de gobierno en Francia antes de la Revolución?",
        options: ["Monarquía absoluta", "República", "Democracia", "Oligarquía"],
        answer: 0
    },
    {
        question: "¿Qué crisis afectó gravemente a Francia en la década de 1780?",
        options: ["Crisis industrial", "Crisis agrícola", "Crisis financiera", "Crisis militar"],
        answer: 2
    },
    {
        question: "¿Qué evento marcó el inicio de la Revolución Francesa?",
        options: ["La toma de la Bastilla", "La Declaración de los Derechos del Hombre", "La convocatoria de los Estados Generales", "La ejecución de Luis XVI"],
        answer: 2
    },
    {
        question: "¿Qué filósofo NO influyó en las ideas de la Revolución Francesa?",
        options: ["Voltaire", "Rousseau", "Montesquieu", "Karl Marx"],
        answer: 3
    },
    {
        question: "¿Cuál era el nombre del rey de Francia al inicio de la Revolución?",
        options: ["Luis XIV", "Luis XV", "Luis XVI", "Luis XVII"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
        options.innerHTML += `<button onclick="checkAnswer(${i})">${question.options[i]}</button>`;
    }
    document.getElementById('result').textContent = '';
    document.getElementById('next').style.display = 'none';
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.answer) {
        document.getElementById('result').textContent = '¡Correcto!';
        score++;
    } else {
        document.getElementById('result').textContent = 'Incorrecto. La respuesta correcta es: ' + question.options[question.answer];
    }
    document.getElementById('next').style.display = 'block';
    document.getElementById('options').querySelectorAll('button').forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById('quiz').innerHTML = `
        <h2>Juego terminado</h2>
        <p>Tu puntuación final es: ${score} de ${questions.length}</p>
        <button onclick="restartGame()">Jugar de nuevo</button>
    `;
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

document.getElementById('next').addEventListener('click', nextQuestion);
loadQuestion();