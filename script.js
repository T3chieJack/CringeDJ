// Array of audio files (adjust names to match your files)
const audioFiles = [
    "audio1.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3", 
    "audio5.mp3", "audio6.mp3", "audio7.mp3", "audio8.mp3",
    "audio9.mp3", "audio10.mp3", "audio11.mp3", "audio12.mp3"
];

function playRandomMusic() {
    const audio = document.getElementById("cringe-music");
    const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    audio.src = `audio/${randomAudio}`;
    audio.play();
    alert(`Now playing: ${randomAudio}`);
}
