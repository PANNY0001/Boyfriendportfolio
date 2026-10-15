// Create gentle falling stars in the background.
const starField = document.getElementById("starField");
const starSymbols = ["✦", "✧", "⋆", "·"];

for (let i = 0; i < 42; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
  star.style.left = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 13}px`;
  star.style.animationDuration = `${8 + Math.random() * 15}s`;
  star.style.animationDelay = `${-Math.random() * 22}s`;
  star.style.opacity = `${0.2 + Math.random() * 0.55}`;
  starField.appendChild(star);
}

// Let the visitor add up to three photos by clicking each photo frame.
document.querySelectorAll(".photo-card").forEach((card) => {
  const input = card.querySelector(".photo-input");
  const img = card.querySelector(".uploaded-photo");
  const placeholder = card.querySelector(".photo-placeholder");

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      input.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      img.src = event.target.result;
      img.style.display = "block";
      placeholder.style.display = "none";
    };
    reader.readAsDataURL(file);
  });
});

// A playful button interaction—change this message to suit your relationship.
document.getElementById("yesButton").addEventListener("click", () => {
  const message = document.getElementById("responseMessage");
  message.textContent = "Interview accepted! First question: when are we going on our first date? ♡";
});
