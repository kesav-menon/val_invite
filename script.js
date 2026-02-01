const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("question-container");
const successContainer = document.getElementById("success-container");

// Function to move the "No" button to a random position
noBtn.addEventListener("mouseover", () => {
    // Calculate random coordinates based on window size
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Update button position
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function for when they finally click "Yes"
yesBtn.addEventListener("click", () => {
    questionContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
});