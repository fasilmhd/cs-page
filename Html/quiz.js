document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let totalQuestions = 5;
  let score = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const name = "q" + i;
    const selected = document.querySelector('input[name="' + name + '"]:checked');
    const options = document.querySelectorAll('input[name="' + name + '"]');

    options.forEach(option => {
      const label = option.parentElement;
      if (option.value === "1") {
        label.innerHTML += " ✅";
        label.style.color = "green";
      }
      if (selected === option && option.value !== "1") {
        label.innerHTML += " ❌";
        label.style.color = "red";
      }
      option.disabled = true;
    });

    if (selected && selected.value === "1") {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.innerHTML = `🎯 You scored <strong>${score}</strong> out of ${totalQuestions}!`;

  if (score === totalQuestions) {
    result.innerHTML += " 🏆 Perfect! You're a tech genius!";
  } else if (score >= 3) {
    result.innerHTML += " 🔥 Great job! Keep it up!";
  } else {
    result.innerHTML += " 😅 Don’t worry, keep learning!";
  }

  // ✅ Update score display here — inside the event!
  document.getElementById('scoreDisplay').textContent = "Score: " + score;
});