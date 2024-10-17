// Make the audio play when pushing down the corresponding keys
// Make it known visually what key you are pressing down
// Make the sound stop for current audio file when press down another key

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.play();
}

window.addEventListener('keydown', playAudio);
