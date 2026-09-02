// JOB API

const API_URL =
    "https://api.jobopportunitiesapi.org/public/jobs";



// USER INTERVIEW SCORE


const userScore =
    parseInt(
        localStorage.getItem("percentage")
    ) || 0;


document.getElementById(
    "userScore"
).textContent =
    userScore + "%";



// SCORE MESSAGE


const scoreMessage =
    document.getElementById(
        "scoreMessage"
    );


if (userScore >= 80) {

    scoreMessage.textContent =
        "Excellent score! You are ready for many developer roles.";

}
else if (userScore >= 60) {

    scoreMessage.textContent =
        "Good score! Continue practicing to improve your job match.";

}
else if (userScore > 0) {

    scoreMessage.textContent =
        "Keep practicing to improve your interview performance.";

}



// DOM ELEMENTS


const keywordInput =
    document.getElementById(
        "keyword"
    );


const countryInput =
    document.getElementById(
        "country"
    );


const searchBtn =
    document.getElementById(
        "searchBtn"
    );


const jobList =
    document.getElementById(
        "jobList"
    );


const loading =
    document.getElementById(
        "loading"
    );


const errorMessage =
    document.getElementById(
        "errorMessage"
    );


const jobCount =
    document.getElementById(
        "jobCount"
    );



// SEARCH JOBS


async function searchJobs() {

    const keyword =
        keywordInput.value.trim();


    const country =
        countryInput.value
            .trim()
            .toUpperCase();


    // Show loading

    loading.style.display =
        "block";

    errorMessage.style.display =
        "none";

    jobList.innerHTML = "";


    try {

        const params =
            new URLSearchParams();


        // Maximum 50 for public endpoint

        params.set(
            "limit",
            "50"
        );


        if (keyword) {

            params.set(
                "q",
                keyword
            );

        }


        if (country) {

            params.set(
                "country",
                country
            );

        }


        const response =
            await fetch(
                `${API_URL}?${params.toString()}`
            );


        if (!response.ok) {

            throw new Error(
                `API Error: ${response.status}`
            );

        }


        const result =
            await response.json();


        console.log(
            "API Response:",
            result
        );


        const jobs =
            result.data || [];


        displayJobs(jobs);


    }
    catch (error) {

        console.error(
            error
        );


        errorMessage.textContent =
            "Unable to load jobs. Please try again.";

        errorMessage.style.display =
            "block";

    }
    finally {

        loading.style.display =
            "none";

    }

}



// DISPLAY JOBS


function displayJobs(jobs) {

    jobList.innerHTML = "";


    jobCount.textContent =
        `${jobs.length} jobs`;


    if (jobs.length === 0) {

        jobList.innerHTML = `

            <div class="no-jobs">

                <h3>
                    😕 No jobs found
                </h3>

                <p>
                    Try another keyword or country.
                </p>

            </div>

        `;

        return;

    }


    jobs.forEach(
        job => {

            const match =
                calculateMatch(job);


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "job-card";


            card.innerHTML = `

                <div class="job-main">

                    <div class="job-logo">

                        ${job.company_logo
                    ?
                    `<img
                                    src="${job.company_logo}"
                                    alt="Company logo"
                                    onerror="this.style.display='none'"
                                >`
                    :
                    "💼"
                }

                    </div>


                    <div class="job-details">

                        <h3>
                            ${escapeHTML(
                    job.title || "Job"
                )}
                        </h3>


                        <p class="company">

                            🏢
                            ${escapeHTML(
                    job.company || "Company"
                )}

                        </p>


                        <p>

                            📍
                            ${escapeHTML(
                    job.city ||
                    job.country ||
                    "Location not specified"
                )}

                        </p>


                        <p>

                            💼
                            ${escapeHTML(
                    job.employment_type ||
                    "Job"
                )}

                        </p>


                        <div class="tags">

                            ${job.category
                    ?
                    `<span>
                                        ${escapeHTML(
                        job.category
                    )}
                                    </span>`
                    :
                    ""
                }

                            ${job.remote
                    ?
                    `<span>
                                        Remote
                                    </span>`
                    :
                    ""
                }

                        </div>

                    </div>

                </div>


                <div class="job-actions">

                    <div class="match-score">

                        <strong>
                            ${match}%
                        </strong>

                        <span>
                            Match
                        </span>

                    </div>


                    <a
                        href="${job.apply_url || job.url || '#'}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="apply-btn">

                        View Job →

                    </a>

                </div>

            `;


            jobList.appendChild(
                card
            );

        }
    );

}



// SCORE MATCHING


function calculateMatch(job) {

    let match =
        userScore;


    const role =
        (
            localStorage.getItem(
                "interviewRole"
            ) || ""
        ).toLowerCase();


    const title =
        (
            job.title || ""
        ).toLowerCase();


    const category =
        (
            job.category || ""
        ).toLowerCase();


    // Role match

    if (
        role === "python" &&
        (
            title.includes("python") ||
            category.includes("python")
        )
    ) {

        match += 10;

    }


    if (
        role === "django" &&
        (
            title.includes("django") ||
            title.includes("python")
        )
    ) {

        match += 10;

    }


    if (
        role === "frontend" &&
        (
            title.includes("frontend") ||
            title.includes("front end") ||
            title.includes("javascript")
        )
    ) {

        match += 10;

    }


    if (
        role === "fullstack" &&
        (
            title.includes("full stack") ||
            title.includes("fullstack")
        )
    ) {

        match += 10;

    }


    return Math.min(
        100,
        match
    );

}



// HTML SECURITY


function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}



// SEARCH BUTTON


searchBtn.addEventListener(
    "click",
    searchJobs
);



// ENTER KEY


keywordInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            searchJobs();

        }

    }
);



// DARK MODE


const themeBtn =
    document.getElementById(
        "themeBtn"
    );


function applyTheme() {

    const theme =
        localStorage.getItem(
            "theme"
        ) || "light";


    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );


    themeBtn.textContent =
        theme === "dark"
            ? "☀️"
            : "🌙";

}


themeBtn.addEventListener(
    "click",
    function () {

        const current =
            localStorage.getItem(
                "theme"
            ) || "light";


        localStorage.setItem(
            "theme",
            current === "dark"
                ? "light"
                : "dark"
        );


        applyTheme();

    }
);


applyTheme();



// INITIAL JOB SEARCH


searchJobs();