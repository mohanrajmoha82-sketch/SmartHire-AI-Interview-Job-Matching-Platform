// ========================================
// SIGN UP
// ========================================

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "signupName"
                ).value.trim();


            const email =
                document.getElementById(
                    "signupEmail"
                ).value.trim().toLowerCase();


            const password =
                document.getElementById(
                    "signupPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            const message =
                document.getElementById(
                    "signupMessage"
                );


            // Password check

            if (
                password !==
                confirmPassword
            ) {

                message.textContent =
                    "❌ Passwords do not match.";

                message.className =
                    "auth-message error";

                return;

            }


            // Get existing users

            const users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            // Check existing email

            const existingUser =
                users.find(
                    user =>
                        user.email === email
                );


            if (existingUser) {

                message.textContent =
                    "❌ Email already registered.";

                message.className =
                    "auth-message error";

                return;

            }


            // Create user

            const newUser = {

                id: Date.now(),

                name: name,

                email: email,

                password: password

            };


            users.push(
                newUser
            );


            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );


            message.textContent =
                "✅ Account created successfully!";


            message.className =
                "auth-message success";


            setTimeout(
                function() {

                    window.location.href =
                        "index.html";

                },
                1200
            );

        }
    );

}


// ========================================
// LOGIN
// ========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim().toLowerCase();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            const user =
                users.find(
                    item =>
                        item.email === email &&
                        item.password === password
                );


            if (!user) {

                message.textContent =
                    "❌ Invalid email or password.";

                message.className =
                    "auth-message error";

                return;

            }


            // Save logged-in user

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            message.textContent =
                "✅ Login successful!";


            message.className =
                "auth-message success";


            setTimeout(
                function() {

                    window.location.href =
                        "page.html";

                },
                800
            );

        }
    );

}


// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "login.html";

}


// ========================================
// CHECK LOGIN
// ========================================

function checkLogin() {

    const user =
        localStorage.getItem(
            "loggedInUser"
        );


    if (!user) {

        window.location.href =
            "login.html";

    }

}