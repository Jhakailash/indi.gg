const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Kolkata", "Delhi", "Bihar", "Goa","Jharkhand"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of Jharkhand?",
        options: ["Bokaro", "Dhanbad", "Ranchi", "Dumka","deoghar"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of Bihar?",
        options: ["Patna", "Madhubani", "Balia", "Gaya","Samastipur"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of west-bengal?",
        options: ["Purlia", "Dhanbad", "Silliguri", "Aasansol","Kolkata"],
        correctAnswer: "Delhi"
    },
    // Add more questions and answers here
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options_container");
    
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${quizData[currentQuestionIndex].question}`;
    
    
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

document.getElementById("submit_button").addEventListener("click", () => {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            
            const scoreElement = document.getElementById("score");
            scoreElement.textContent = score;
        }
    } else {
        alert("Please select an answer.");
    }
});
