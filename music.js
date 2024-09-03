function manageBackgroundMusic() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1;

    const currentTime = sessionStorage.getItem('audio_current_time');
    if (currentTime) {
        audio.currentTime = currentTime;
    }

    audio.play();

    audio.addEventListener('timeupdate', () => {
        sessionStorage.setItem('audio_current_time', audio.currentTime);
    });
}

function pauseBackgroundMusic() {
    const audio = document.getElementById('background-music');
    audio.pause();
}