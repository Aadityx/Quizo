let score = 0;
let selectedIndex = null;
let answered = false;

const options = document.querySelectorAll(".options button");
const submitBtn = document.getElementById("submit");
const correctIndex = 2; // Delhi

// when user clicks option → just select (no scoring yet)
options.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (answered) return;

    // remove previous selection highlight
    options.forEach(b => b.style.backgroundColor = "#f5f5f5");

    btn.style.backgroundColor = "#dcdcdc"; // selected color
    selectedIndex = index;
  });
});

// when user clicks submit → check answer
submitBtn.addEventListener("click", () => {
  if (selectedIndex === null) {
    alert("Please select an option first!");
    return;
  }

  if (answered) return;
  answered = true;

  if (selectedIndex === correctIndex) {
    options[selectedIndex].style.backgroundColor = "green";
    score++;
  } else {
    options[selectedIndex].style.backgroundColor = "red";
    options[correctIndex].style.backgroundColor = "green";
  }

  // update score
  document.querySelector(".score").innerText = "Score: " + score;
});