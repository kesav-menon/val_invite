const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("question-container");
const successContainer = document.getElementById("success-container");

noBtn.addEventListener("mouseover", () => {
    // We calculate a 50px "safe zone" so it doesn't hit the very edge
    const padding = 50;
    
    // Generate random position within the visible window
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Apply the new position
    noBtn.style.position = "fixed"; // Use fixed to ensure it moves relative to the screen
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
    questionContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
});
