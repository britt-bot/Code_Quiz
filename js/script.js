// timed coding quiz - multiple choice questions
// run in browser - feature dynamically update HTML and CSS powered by JS.
// clean - polished - responsive user interface.

// javascript fundamentals:
// stores high scores
// to gauge progress compared to peers

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// // var words = message.split(' ');

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// var timerEl = document.getElementById('countdown');
// // var mainEl = document.getElementById('main');

// var userAnswer

// let questions = [{
//       question: "What's your favorite time?",
//       options: ['morning', 'noon', 'afternoon', 'evening'],
//       answer: 'noon'
//     },
//     {
//       question: "What's your favorite color?",
//       options: ['blue', 'red', 'green', 'yellow'],
//       answer: 'blue'
//     },
//     {
//       question: "What's your fave animal?",
//       options: ['cat', 'dog', 'bird', 'fish'],
//       answer: 'blue'
//     }
//     {
//       question: "What's your fave food?",
//       options: ['pizza', 'tacos', 'sushi', 'cupcakes'],
//       answer: 'tacos'
//     }
//     {
//       question: "What's your fave drink?",
//       options: ['coffee', 'juice', 'tea', 'water'],
//       answer: 'tea'
//     }
// ]
// console.log(questions);

// function buildQuiz(){}
// function showResults(){}

// //display quiz 
// buildQuiz();

// //on click start quiz
// generateButton.addEventListener('click', startQuiz)

// // event click

// // when user clicks button 
// // timer starts and user is presented with a question
// // begin game
// // timer
// var score = 0;
// var currentQuestion = -1;
// var timeLeft = 0;
// var timeInterval;

// function countdown() {
//     var timeLeft = 65;
//     var timeInterval = setInterval(function () {
//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 1) {
//           // Set the `textContent` of `timerEl` to show the remaining seconds
//           console.log(timeLeft + ' seconds remaining');
//           // Decrement `timeLeft` by 1
//           timeLeft--;
//         } else if (timeLeft === 1) {
//           // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//           console.log(timeLeft + ' second remaining');
//           timeLeft--;
//         } else {
//           // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//           timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//           clearInterval(timeInterval);
//           // Call the `displayMessage()` function
//           displayMessage('Game Over!');
//         }
//       }, 1000);
//     }




// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }
// countdown();

// // if user answer is correct
// event click
// if (userAnswer = true) {
// function - user is presented with another question
// }

// // if user answer is incorrect - subtract time from clock
// if (userAnswer = false) {
// then time is - from the clock
// }

// // game over =
// game over  = is reached when 
// if timer = 0 
// else all questions have been answered 

// // at game over
// when game is over 
// user can save their initials and score





// // TUTORIAL CODE:
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const qImg = document.getElementById("questionImage");
// const question = document.getElementById("question");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const progress = document.getElementById("progress");
// const scoreContainer = document.getElementById("scoreContainer");


// let questions = [
//   {
//     question: "",
//     choiceA: "",
//     choiceB: "",
//     choiceC: "",
//     correct: ""
//   },
//   {
//     question: "",
//     choiceA: "",
//     choiceB: "",
//     choiceC: "",
//     correct: ""
//   },
//   {
//     question: "",
//     choiceA: "",
//     choiceB: "",
//     choiceC: "",
//     correct: ""
//   },
//   {
//     question: "",
//     choiceA: "",
//     choiceB: "",
//     choiceC: "",
//     correct: ""
//   },
//   {
//     question: "",
//     choiceA: "",
//     choiceB: "",
//     choiceC: "",
//     correct: ""
//   },
// ];

// let lastQuestionIndex = questions.length-1;
// let runningQuestionIndex = 0;

// function renderQuestion(){
//   let q = questions[runningQuestionIndex];
//   question.innerHTML = "<p>" + q.question + "</p>";
//   choiceA.innerHTML = q.choiceA;
//   choiceB.innerHTML = q.choiceB;
//   choiceC.innerHTML = q.choiceC;
// }

// function progressRender(){
//   for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
//     progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//   }
// }
// function answerIsCorrect(){
//   document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
// }
// function answerisWrong(){
//   document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
// }

// const questionTime = 10;
// const gaugeWidth = 150;
// let count = 0;
// const gaugeProgressUnit = gaugeWidth/questionTime;

// function counterRender(){
//   if(count <= questionTime){
//     counter.innerHTML = count;
//     timeGauge.style.width = gaugeProgressUnite * count + "px";
//     count++;
//   } else {
//     count = 0;
//     answerisWrong();
//     if(runningQuestionIndex < lastQuestionIndex){
//       runningQuestionIndex++;
//       questionRender();
//     } else {
//       clearInterval(TIMER);
//       scoreRender();
//     }
//     let TIMER = setInterval(counterRender,1000);
//   }
// }

// function checkAnswer(answer){
//   if(question[runningQuestionIndex].correct == answer){
//     score++;
//     answerIsCorrect();
//   } else {
//     answerisWrong();
//   } if(runningQuestionIndex < lastQuestionIndex) {
//     count = 0;
//     runningQuestionIndex++;
//     questionRender()
//   } else {
//     clearInterval(TIMER);
//     scoreRender();
//   }
// }

// const start = document.getElementById('start');
// start.addEventListener("click", startQuiz);
// let TIMER;
// function startQuiz(){
//   start.style.display = "none";
//   counterRender();
//   TIMER = setInterval(counterRender,1000);
//   progressRender();
//   questionRender();
//   quiz.style.display = "block";
// }

// function scoreRender(){
//   scoreContainer.style.display = "block";
//   let scorePerCent = Math.round(100 * score / questions.length);
//   let img = (scorePerCent >= 80) ? "img/5.png":
//             (scorePerCent >= 60) ? "img/4.png":
//             (scorePerCent >= 40) ? "img/3.png":
// }