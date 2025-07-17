// === CARRUSEL DE IMÁGENES ===
const carrusel = document.querySelector('.carrusel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = document.querySelectorAll('.carrusel img').length;
let index = 0;

function showSlide(i) {
  const slideWidth = carrusel.clientWidth;
  carrusel.style.transform = `translateX(${-i * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 4000);

// === REPRODUCTOR DE VIDEO PERSONALIZADO ===
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");
const speed = document.getElementById("speed");
const volume = document.getElementById("volume");
const fullscreenBtn = document.getElementById("fullscreen");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸";
  } else {
    video.pause();
    playPauseBtn.textContent = "⏵";
  }
});

video.addEventListener("timeupdate", () => {
  progress.max = video.duration;
  progress.value = video.currentTime;
});

progress.addEventListener("input", () => {
  video.currentTime = progress.value;
});

speed.addEventListener("change", () => {
  video.playbackRate = speed.value;
});

volume.addEventListener("input", () => {
  video.volume = volume.value;
});

fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});