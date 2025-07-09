const audio = document.getElementById("audio");
const trackTitle = document.getElementById("track-title");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const playlist = [
  {
    title: "Track 1 - Sample",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    preload: "metadata"
  },
  {
    title: "Track 2 - Sample",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    preload: "none"
  },
  {
    title: "Track 3 - Sample",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    preload: "auto"
  }
];

let currentTrack = 0;
let isPlaying = false;

// Load track by index
function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  audio.preload = track.preload;
  trackTitle.textContent = track.title;
  isPlaying = false;
  updatePlayPauseButton();
}

// Play or pause the audio
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
  updatePlayPauseButton();
}

// Update play/pause button text
function updatePlayPauseButton() {
  playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
}

// Go to next track
function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  updatePlayPauseButton();
}

// Go to previous track
function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  updatePlayPauseButton();
}

// Event listeners
playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);
audio.addEventListener("ended", nextTrack);

// Load the first track initially
loadTrack(currentTrack);
