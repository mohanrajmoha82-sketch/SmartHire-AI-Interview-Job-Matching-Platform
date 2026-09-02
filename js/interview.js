const role =
    localStorage.getItem("interviewRole");

const questionCount =
    parseInt(
        localStorage.getItem("questionCount")
    ) || 10;


let filteredQuestions =
    questions.filter(
        q => q.role === role
    );


// If role has fewer questions,
// use available questions

filteredQuestions =
    filteredQuestions.slice(0, questionCount);


let currentQuestion = 0;

let userAnswers =
    new Array(filteredQuestions.length).fill(null);

let timeLeft = 60;

let timerInterval;


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumber =
    document.getElementById("questionNumber");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const timerElement =
    document.getElementById("timer");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");


// Load question

function loadQuestion() {

    const q =
        filteredQuestions[currentQuestion];


    questionElement.textContent =
        q.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;


    progressText.textContent =
        `${currentQuestion + 1} / ${filteredQuestions.length}`;


    const progress =
        ((currentQuestion + 1) /
        filteredQuestions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    optionsElement.innerHTML = "";


    q.options.forEach(
        (option, index) => {

            const div =
                document.createElement("div");

            div.className = "option";

            div.textContent = option;


            if (
                userAnswers[currentQuestion]
                === index
            ) {
                div.classList.add("selected");
            }


            div.addEventListener(
                "click",
                function () {

                    userAnswers[currentQuestion]
                        = index;

                    document
                        .querySelectorAll(".option")
                        .forEach(
                            item =>
                            item.classList.remove(
                                "selected"
                            )
                        );

                    div.classList.add("selected");
                }
            );


            optionsElement.appendChild(div);
        }
    );


    prevBtn.disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        filteredQuestions.length - 1
    ) {

        nextBtn.textContent =
            "Finish Interview ✓";

    } else {

        nextBtn.textContent =
            "Next →";
    }


    resetTimer();
}


// Timer

function resetTimer() {

    clearInterval(timerInterval);

    timeLeft = 60;

    timerElement.textContent =
        timeLeft;


    timerInterval =
        setInterval(() => {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                nextQuestion();
            }

        }, 1000);
}


// Next question

function nextQuestion() {

    if (
        currentQuestion <
        filteredQuestions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishInterview();
    }
}


// Previous

prevBtn.addEventListener(
    "click",
    function () {

        if (currentQuestion > 0) {

            currentQuestion--;

            loadQuestion();
        }
    }
);


// Next

nextBtn.addEventListener(
    "click",
    nextQuestion
);


// Finish

function finishInterview() {

    clearInterval(timerInterval);


    let correct = 0;


    filteredQuestions.forEach(
        (q, index) => {

            if (
                userAnswers[index]
                === q.answer
            ) {

                correct++;
            }
        }
    );


    const total =
        filteredQuestions.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    localStorage.setItem(
        "correct",
        correct
    );

    localStorage.setItem(
        "total",
        total
    );

    localStorage.setItem(
        "percentage",
        percentage
    );


    window.location.href =
        "result.html";
}


// Start

loadQuestion();