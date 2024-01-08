const questions = document.querySelectorAll(".question");

// open and close FAQs
questions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    // toggle showing answer
    const answerText = answer.querySelector("p");
    answerText.classList.toggle("show");
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");
    // change icon based on is expanded or collapsed
    if (answerText.classList.contains("show")) {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});

// handle enter click
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && e.target.classList.contains("question")) {
    console.log("yes");
    e.preventDefault();
    e.target.click();
  }
});
