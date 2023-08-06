const questions = [
    {
        question: "Which is the biggest continent in the world?",
        answers: [
            { Text: "North America", correct: false },
            { Text: "Asia", correct: true },
            { Text: "Africa", correct: false },
            { Text: "Australia", correct: false },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { Text: "Great Ganga", correct: false },
            { Text: "Amazon", correct: false },
            { Text: "Nile", correct: true },
            { Text: "Narmada", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { Text: "Indian Ocean", correct: false },
            { Text: "Arctic Ocean", correct: false },
            { Text: "Atlantic Ocean", correct: false },
            { Text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which animal is Fastest land animal in the world?",
        answers: [
            { Text: "Cheetah", correct: true },
            { Text: "Lion", correct: false },
            { Text: "Leopard", correct: false },
            { Text: "Tiger", correct: false },
        ]
    },
    {
        question: "The forest in Sundarbans is also called?",
        answers: [
            { Text: "Scrub jungle", correct: false },
            { Text: "Deciduous forest", correct: false },
            { Text: "Mangrove", correct: true },
            { Text: "None of these", correct: false },
        ]
    },
    {
        question: "Which country has the highest forest cover in terms of Area?",
        answers: [
            { Text: "Russia", correct: true },
            { Text: "Brazil", correct: false },
            { Text: "None of these", correct: false },
            { Text: "India", correct: false },
        ]
    },
    {
        question: "Which of the following animals are not found in Kanha National Park?",
        answers: [
            { Text: "Jungle Cat", correct: false },
            { Text: "All of the above are found", correct: true },
            { Text: "Gaur", correct: false },
            { Text: "Tiger", correct: false },
        ]
    },
    {
        question: "In which of the following given states Wayanad Wildlife Sanctuary is located?",
        answers: [
            { Text: "Arunachal Pradesh", correct: false },
            { Text: "Karnataka", correct: false },
            { Text: "Kerala", correct: true },
            { Text: "Tamil Nadu", correct: false },
        ]
    },
    {
        question: "Which is the smallest forest state in India? ",
        answers: [
            { Text: "Madhya Pradesh", correct: false },
            { Text: "Punjab", correct: true },
            { Text: "Andhra Pradesh", correct: false },
            { Text: "Karnataka", correct: false },
        ]
    },
    {
        question: "Van Vihar National park is located in which Indian city?",
        answers: [
            { Text: "Shimla", correct: false },
            { Text: "Chandigarh", correct: false },
            { Text: "Bhopal", correct: true },
            { Text: "Patna", correct: false },
        ]
    },
    
];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.Text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
        
}
    
function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct == "true";
        if (iscorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handelNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
       if(currentQuestionIndex < questions.length){
           handelNextButton();
       }
       else {
           startQuiz();
        }
    });
        startQuiz();