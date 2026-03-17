let score = 0;
let selected = -1;

const options = document.querySelectorAll(".options button");
const submit = document.getElementById("submit");

// select option
options.forEach((btn, index) => {
  btn.onclick = () => {
    selected = index;

    // reset all colors
    options.forEach(b => b.style.background = "#f5f5f5");

    // highlight selected
    btn.style.background = "yellow";
  };
});

// submit answer
submit.onclick = () => {
  if (selected === -1) {
    alert("Select an option first!");
    return;
  }

  // correct answer = 2 (Delhi)
  if (selected === 2) {
    options[selected].style.background = "green";
    score++;
  } else {
    options[selected].style.background = "red";
    options[2].style.background = "green";
  }

  // update score
  document.querySelector(".score").innerText = "Score: " + score;
};