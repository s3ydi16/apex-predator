let x = 0;
function quizzz(questionId, correctAnswer) {
  let quiz = document.getElementById(questionId);
  let buttons = quiz.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      if (quiz.answered) return;
      quiz.answered = true;

      if (buttons[i].textContent === correctAnswer) {
        buttons[i].style.backgroundColor = "green";
        x++;
      } else {
        buttons[i].style.backgroundColor = "red";

        for (let j = 0; j < buttons.length; j++) {
          if (buttons[j].textContent === correctAnswer) {
            buttons[j].style.backgroundColor = "green";
          } }
      } }
  }}

quizzz("ques1", "Orca");
quizzz("ques2", "Orca");
quizzz("ques3", "Orca");
quizzz("ques4", "Orca");
quizzz("ques5", "Tiger");
 function submitQuiz(){
  alert("Your score: " + x + " / 5");
 }

