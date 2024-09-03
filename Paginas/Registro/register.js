firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "/Paginas/Home/home.html";
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1;
    audio.play();
});

function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    toggleRegisterButtonsDisable()
}

function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validatePasswordMatch()
    toggleRegisterButtonsDisable()
}

function onChangeConfirmPassword() {
    validatePasswordMatch()
    toggleRegisterButtonsDisable()
}

function validatePasswordMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = 
        password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonsDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if (!email ||  !validateEmail(email)) { return false;
    }

    const password = form.password().value
    if (!password  || password.length < 6 ) { return false
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) { return false;
    }

    return true;
}

function goBackToLogin() {
    window.location.href = "/index/login.html";
}

function register() {
    showLoading()

    const email = form.email().value;
    const password = form.password().value
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href = "/Paginas/Home/home.html"
    }).catch((error) => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/email-alredy/in/use")
        return "Email já está sendo utilizado"
    return error.message;
}

const form = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    registerButton:  () => document.getElementById("registerBtn"),
}

