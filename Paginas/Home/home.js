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
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1;
    audio.play();
});
