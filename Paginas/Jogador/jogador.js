function logout() {
    showLoading();
    firebase.auth().signOut().then(() => {
        window.location.href = "/index/login.html";
    }).catch(() => {
        alert('Erro ao fazer logout!');
    }).finally(() => {
        hideLoading();
    });
}

function newPersona(){
    window.location.href = "/Paginas/personagem/ficha/ficha.html"
}