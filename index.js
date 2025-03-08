function playAudio() {
  const audio = document.getElementById("birthday-audio");
  const button = document.querySelector(".music-button");

  try {
    if (audio.paused) {
      audio.play();
      button.innerHTML = "🎵 Playing Our Song";
      button.style.background = "#2ecc71";
    } else {
      audio.pause();
      button.innerHTML = "🎵 Play Our Song";
      button.style.background = "var(--accent-color)";
    }
  } catch (error) {
    button.innerHTML = "❌ Error Playing Song";
    console.error("Audio playback error:", error);
  }
}

// Optional: Add spacebar play/pause control
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    playAudio();
  }
});
