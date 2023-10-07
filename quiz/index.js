const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Kolkata", "Delhi", "Bihar", "Goa", "Jharkhand"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of Jharkhand?",
        options: ["Bokaro", "Dhanbad", "Ranchi", "Dumka", "Deoghar"],
        correctAnswer: "Ranchi"
    },
    {
        question: "What is the capital of Bihar?",
        options: ["Patna", "Madhubani", "Balia", "Gaya", "Samastipur"],
        correctAnswer: "Patna"
    },
    {
        question: "What is the capital of West Bengal?",
        options: ["Purlia", "Dhanbad", "Silliguri", "Asansol", "Kolkata"],
        correctAnswer: "Kolkata"
    },
    {
        question: "What is the capital of Rajasthan",
        options: ["Purlia", "Dhanbad", "Jaipur", "New Delhi", "Kolkata"],
        correctAnswer: "Kolkata"
    },
    
    // Add more questions and answers here
];


let currentQuestionIndex = 0;
let score = 0;
let submitted = false;

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

    submitted = false; // Reset submitted flag when loading a new question
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}

loadQuestion();

document.getElementById("submit_button").addEventListener("click", () => {
    if (submitted) {
        return; 
    }

    const selectedAnswer = document.querySelector("input[name='answer']:checked");

    if (selectedAnswer) {
        submitted = true;
        if (selectedAnswer.value.toLowerCase() === quizData[currentQuestionIndex].correctAnswer.toLowerCase()) {
            score++;
            console.log("score",score)
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    } else {
        alert("Please select an answer.");
    }
});

document.getElementById("next_button").addEventListener("click", () => {
    if (!submitted) {
        alert("Please submit your answer.");
        return;
    }

    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // alert("Quiz completed. Your score: " + score);
        // resetQuiz();
        document.getElementById("quiz_completed").style.display = "block";
        document.getElementById("total_score").textContent = score;

    }
});