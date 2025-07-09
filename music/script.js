const audio = document.getElementById("audio");
const trackTitle = document.getElementById("track-title");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const playlist = [
  {
    title: "Track 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    preload: "metadata"
  },
  {
    title: "Track 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    preload: "none"
  },
  {
    title: "Track 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    preload: "auto"
  }
];

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  audio.preload = track.preload;
  trackTitle.textContent = track.title;
  isPlaying = false;
  updateButton();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
  updateButton();
}

function updateButton() {
  playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  updateButton();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  updateButton();
}

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);
audio.addEventListener("ended", nextTrack);

// Load first track on page load
loadTrack(currentTrack);
