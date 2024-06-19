document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playPauseBtn = document.getElementById("play-pause");
  const currentTimeElement = document.getElementById("current-time");
  const durationElement = document.getElementById("duration");
  const seekBar = document.getElementById("seek-bar");

  // Play/Pause functionality
  playPauseBtn.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Update seek bar and time
  audioPlayer.addEventListener("timeupdate", function () {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    seekBar.value = (currentTime / duration) * 100;
    currentTimeElement.textContent = formatTime(currentTime);
    durationElement.textContent = formatTime(duration);
  });

  // Seek functionality
  seekBar.addEventListener("input", function () {
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (seekBar.value / 100) * duration;
  });

  // Format time to MM:SS
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
});
