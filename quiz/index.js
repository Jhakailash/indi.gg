const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Kolkata", "Delhi", "Goa", "Bihar"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of Jharkhand?",
        options: ["Bokaro", "Dhanbad", "Ranchi", "Dumka"],
        correctAnswer: "Delhi"
    },
    // Add more questions and answers here
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${quizData[currentQuestionIndex].question}`;
    
    // Populate answer options
    optionsContainer.innerHTML = "";
    quizData[currentQuestionIndex].options.forEach(option => {
        const label = document.createElement("label");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = option;
        label.appendChild(radioInput);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
    });
}

loadQuestion();

document.getElementById("submit-button").addEventListener("click", () => {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            // Quiz is complete, display final score
            const scoreElement = document.getElementById("score");
            scoreElement.textContent = score;
        }
    } else {
        alert("Please select an answer.");
    }
});
