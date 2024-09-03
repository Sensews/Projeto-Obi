firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "/index/login.html";
    }
})