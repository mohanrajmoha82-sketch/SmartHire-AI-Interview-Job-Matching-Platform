const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    const role =
        document.getElementById("role").value;

    const difficulty =
        document.getElementById("difficulty").value;

    const questionCount =
        document.getElementById("questionCount").value;


    localStorage.setItem(
        "interviewRole",
        role
    );

    localStorage.setItem(
        "interviewDifficulty",
        difficulty
    );

    localStorage.setItem(
        "questionCount",
        questionCount
    );


    window.location.href = "interview.html";

});


// Dark Mode

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});