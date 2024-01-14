const startButton = document.getElementById('startButton');

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

let timer;
let timeRemaining = 60; // 60 seconds (1 minute)
let currentQuestion = 0;
let score = 0;


function startQuiz() {
    document.getElementById('layout').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    loadQuestions();
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        timeRemaining--;

        if (timeRemaining <= 0) {
            // Time ran out, show the result
            clearInterval(timer);
            showResult();
        }
    }, 1000); // 1000 milliseconds = 1 second
}
startButton.addEventListener('click',startQuiz);
const questions = [
    {
        question: 'What is the capital of North Carolina?',
        options:['Greensboro','Raleigh','Fayettville','Charlotte'],
        correctAnswer:'Raleigh'
    },

    {
        question: 'Whate data type represents true or false?',
        options:['string','float','boolean','array'],
        correctAnswer:'boolean'
    },
];

 


function loadQuestions() {

    questionElement.textContent = questions[currentQuestion].question;
    const questionChoices = questions[currentQuestion].options;
    for(let i=0; i<questionChoices.length; i++){
      const currentChoice = questionChoices[i];
      console.log(currentChoice);
      const newButton = document.createElement('button');
      newButton.textContent = currentChoice;
      newButton.addEventListener('click',function(){
        if (currentChoice === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        // Check if there are more questions
        if (currentQuestion < questions.length) {
            loadQuestions(); 
        } else {
            clearInterval(timer);
            // No more questions, show the result
            showResult();
        }

      });
      optionsElement.append(newButton);

    }
}

function showResult() {
    
    resultElement.textContent = `Your Score: ${score}/${questions.length}`;

    
}


 ;
