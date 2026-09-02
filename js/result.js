const correct =
    parseInt(localStorage.getItem("correct")) || 0;

const total =
    parseInt(localStorage.getItem("total")) || 0;

const percentage =
    parseInt(localStorage.getItem("percentage")) || 0;

const role =
    localStorage.getItem("interviewRole") || "Unknown";


// CALCULATE WRONG ANSWERS


const wrong = total - correct;


// DISPLAY ANALYTICS


document.getElementById("score").textContent =
    percentage + "%";

document.getElementById("correct").textContent =
    correct;

document.getElementById("wrong").textContent =
    wrong;

document.getElementById("accuracy").textContent =
    percentage + "%";


// PERFORMANCE LEVEL


const performanceBadge =
    document.getElementById("performanceBadge");

const performanceText =
    document.getElementById("performanceText");

if (percentage >= 80) {


    performanceBadge.textContent =
        "Excellent 🚀";

    performanceText.textContent =
        "Excellent performance! You are well prepared for technical interviews.";


}
else if (percentage >= 60) {


    performanceBadge.textContent =
        "Good 👍";

    performanceText.textContent =
        "Good performance. Continue practicing to improve your technical knowledge.";


}
else if (percentage >= 40) {


    performanceBadge.textContent =
        "Average 📚";

    performanceText.textContent =
        "You have a good foundation. Focus more on your weak areas.";


}
else {


    performanceBadge.textContent =
        "Needs Improvement 💪";

    performanceText.textContent =
        "Keep practicing the fundamentals and try the interview again.";


}


// PERFORMANCE CHART


const ctx =
    document.getElementById(
        "performanceChart"
    );

new Chart(ctx, {


    type: "doughnut",

    data: {

        labels: [
            "Correct",
            "Wrong"
        ],

        datasets: [

            {
                data: [
                    correct,
                    wrong
                ]
            }

        ]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                position: "bottom"
            }

        }

    }


});


// INTERVIEW HISTORY


let history =
    JSON.parse(
        localStorage.getItem("interviewHistory")
    ) || [];

// Create current interview record

const interviewRecord = {


    date: new Date().toLocaleString(),

    role: role,

    score: percentage,

    correct: correct,

    wrong: wrong,

    accuracy: percentage


};

// Add latest interview

history.push(interviewRecord);

// Save history

localStorage.setItem(
    "interviewHistory",
    JSON.stringify(history)
);


// DISPLAY HISTORY


function displayHistory() {


    const table =
        document.getElementById(
            "historyTable"
        );


    table.innerHTML = "";


    if (history.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="6">
                No interview history available
            </td>
        </tr>
    `;

        return;
    }


    // Show latest interview first

    const reversedHistory =
        [...history].reverse();


    reversedHistory.forEach(
        interview => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

            <td>
                ${interview.date}
            </td>

            <td>
                ${formatRole(interview.role)}
            </td>

            <td>
                <strong>
                    ${interview.score}%
                </strong>
            </td>

            <td>
                ${interview.correct}
            </td>

            <td>
                ${interview.wrong}
            </td>

            <td>
                ${interview.accuracy}%
            </td>

        `;


            table.appendChild(row);

        }
    );


}


// FORMAT ROLE NAME


function formatRole(role) {


    const roles = {

        python:
            "Python Developer",

        django:
            "Django Developer",

        frontend:
            "Frontend Developer",

        fullstack:
            "Full Stack Developer"

    };


    return roles[role] || role;


}

// Display history

displayHistory();


// CLEAR HISTORY


document.getElementById(
    "clearHistory"
).addEventListener(
    "click",
    function () {


        const confirmDelete =
            confirm(
                "Are you sure you want to clear all interview history?"
            );


        if (confirmDelete) {

            localStorage.removeItem(
                "interviewHistory"
            );

            history = [];

            displayHistory();

        }

    }


);



