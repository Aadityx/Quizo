let score = 0;
let answered = false;

// select all option buttons
const options = document.querySelectorAll(".options button");

// correct answer (Delhi = index 2)
const correctIndex = 2;

options.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    
    if (answered) return; // prevent multiple clicks
    answered = true;

    if (index === correctIndex) {
      btn.style.backgroundColor = "green";
      score++;
    } else {
      btn.style.backgroundColor = "red";
      // highlight correct one also
      options[correctIndex].style.backgroundColor = "green";
    }

    // update score on screen
    document.querySelector(".score").innerText = "Score: " + score;
  });
});