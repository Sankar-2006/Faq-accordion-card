const questionTabs = document.querySelectorAll(".question-tab");
const sections = document.querySelectorAll(".section");
const answers = document.querySelectorAll(".answer");

questionTabs.forEach((question, index) => {
  question.onclick = () => {
    const isActive = sections[index].classList.contains("active");

    sections.forEach(section => {
      section.classList.remove("active");
      section.classList.add("inactive");
    });

    answers.forEach((answer) => (answer.style.display = "none"));

    if (!isActive) {
      sections[index].classList.remove("inactive");
      sections[index].classList.add("active");
      setTimeout(() => (answers[index].style.display = "block"), 150);
    }
  };
});
