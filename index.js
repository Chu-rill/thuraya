document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");

  // Try autoplay (will likely be blocked)
  audio.play().catch(() => {
    console.log("Autoplay blocked, waiting for user interaction...");

    // Create an invisible button to trigger play
    const button = document.createElement("button");
    button.style.position = "absolute";
    button.style.opacity = "0";
    button.innerText = "Play";
    document.body.appendChild(button);

    // Trigger a click programmatically
    button.click();

    // Play when the user interacts with the page
    document.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true }
    );
  });
});
