// Make the audio play when pushing down the corresponding keys
// Make it known visually what key you are pressing down
// Make the sound stop for current audio file when press down another key


function playAudio() {
    window.addEventListener('keydown', (key) => {
        let aKey = document.getElementById('A');
        if (key === 'a') {
            aKey.play();
        }
    }
)}

playAudio();