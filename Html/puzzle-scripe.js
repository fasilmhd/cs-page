let score = 0;

function checkAnswer(button, isCorrect) {
  // Prevent answering the same question multiple times
  const parent = button.parentElement;
  const alreadyAnswered = parent.classList.contains("answered");

  if (!alreadyAnswered) {
    if (isCorrect) {
      score++;
      button.textContent = "✅ Correct!";
      button.style.backgroundColor = "#28a745";
    } else {
      button.textContent = "❌ Wrong!";
      button.style.backgroundColor = "#e74c3c";
    }
    parent.classList.add("answered");

    // Disable all buttons inside this question
    const buttons = parent.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    document.getElementById("score").textContent = score;
  }
}