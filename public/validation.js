function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginErrorMessage = document.getElementById('loginErrorMessage');

    if (username === "" || password === "") {
        loginErrorMessage.textContent = "Both fields are required.";
        return false;
    }

    loginErrorMessage.textContent = "";
    return true;
}

function validateSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const signupErrorMessage = document.getElementById('signupErrorMessage');

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        signupErrorMessage.textContent = "All fields are required.";
        return false;
    }

    if (password !== confirmPassword) {
        signupErrorMessage.textContent = "Passwords do not match!";
        return false;
    }

    signupErrorMessage.textContent = "";
    return true;
}
