// document.addEventListener("DOMContentLoaded", () => {
//   const audio = document.getElementById("audio");

//   // Try autoplay (will likely be blocked)
//   audio.play().catch(() => {
//     console.log("Autoplay blocked, waiting for user interaction...");

//     // Create an invisible button to trigger play
//     const button = document.createElement("button");
//     button.style.position = "absolute";
//     button.style.opacity = "0";
//     button.innerText = "Play";
//     document.body.appendChild(button);

//     // Trigger a click programmatically
//     button.click();

//     // Play when the user interacts with the page
//     document.addEventListener(
//       "click",
//       () => {
//         audio.play();
//       },
//       { once: true }
//     );
//   });
// });

//slide show

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const startButton = document.getElementById("startAudio");

  // Try autoplay first
  audio.play().catch(() => {
    console.log("Autoplay blocked, waiting for user click...");
    startButton.style.display = "block"; // Show button if autoplay fails
  });

  startButton.addEventListener("click", () => {
    audio.play();
    startButton.style.display = "none"; // Hide button after click
  });
});
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let autoSlideInterval;

// Start auto-sliding
startAutoSlide();

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 2000); // Change slide every 5 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function changeSlide(n) {
  showSlide((slideIndex += n));
  stopAutoSlide();
  startAutoSlide();
}

function currentSlide(n) {
  showSlide((slideIndex = n));
  stopAutoSlide();
  startAutoSlide();
}

function showSlide(n) {
  // Reset if we've reached the end or beginning
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and pause all videos
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active-dot");

    // Pause any videos in this slide
    const videos = slides[i].getElementsByTagName("video");
    for (let video of videos) {
      video.pause();
    }
  }

  // Show the current slide and highlight the current dot
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");

  // Play any videos in the current slide
  const currentVideos = slides[slideIndex].getElementsByTagName("video");
  for (let video of currentVideos) {
    video.currentTime = 0; // Reset to beginning
    video.play();
  }
}
