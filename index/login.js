firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "/Paginas/Home/home.html";
    }
})

document.getElementById("email").addEventListener("input", onChangeEmail);
document.getElementById("password").addEventListener("input", onChangePassword);
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("registerBtn").addEventListener("click", register);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1;
    audio.play();
});

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    showLoading(); // Exibir a tela de carregamento
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Autenticação bem-sucedida, redirecionar para a página principal
            window.location.href = "/Paginas/Home/home.html";
            hideLoading(); // Ocultar a tela de carregamento
        })
        .catch((error) => {
            // Exibir mensagem de erro se a autenticação falhar
            alert(getErrorMessage(error));
            hideLoading(); // Ocultar a tela de carregamento em caso de erro
        });
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    return error.message;
}

function register() {
    showLoading(); // Exibir a tela de carregamento
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "login.html";
            hideLoading(); // Ocultar a tela de carregamento
        })
        .catch((error) => {
            alert(getErrorMessage(error));
            hideLoading(); // Ocultar a tela de carregamento em caso de erro
        });
}
function recoverPassword() {
    showLoading();
    const email = document.getElementById("email").value; // Obter o valor do email diretamente

    firebase.auth().sendPasswordResetEmail(email) // Usar o email obtido
        .then(() => {
            hideLoading();
            alert('Um email de redefinição de senha foi enviado, se o email estiver cadastrado.'); // Mensagem mais informativa
        })
        .catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
}

function toggleEmailErrors() {
    const email = document.getElementById("email").value;
    const emailRequiredError = document.getElementById("email-required-error");
    const emailInvalidError = document.getElementById("email-invalid-error");

    emailRequiredError.style.display = email ? "none" : "block";
    emailInvalidError.style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = document.getElementById("password").value;
    const passwordRequiredError = document.getElementById("password-required-error");

    passwordRequiredError.style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    const recoverPasswordButton = document.getElementById("recover-password-button");
    const loginButton = document.getElementById("loginBtn");

    recoverPasswordButton.disabled = !emailValid;
    loginButton.disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    return email && validateEmail(email);
}

function isPasswordValid() {
    return !!document.getElementById("password").value;
}
