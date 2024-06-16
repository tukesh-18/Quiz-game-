const quesJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Five", "Three", "Four"],
    question: "How many pieces of bun are in McDonald's Big Mac?"
  },
  {
    correctAnswer: "L. Frank Baum",
    options: ["Suzanne Collins", "L. Frank Baum", "James Fennimore Cooper", "Donna Leone"],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?"
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Hen", "A Nanny", "A Lioness", "A Sow"],
    question: "A female goat is known as what?"
  },
  {
    correctAnswer: "Atlanta United",
    options: ["Atlanta Bulls", "Atlanta United", "Atlanta Stars", "Atlanta Impact"],
    question: "Which of these is a soccer team based in Atlanta?"
  },
  {
    correctAnswer: "P L Travers",
    options: ["Enid Blyton", "Lewis Carroll", "J R R Tolkien", "P L Travers"],
    question: "Which author wrote 'Mary Poppins'?"
  },
  {
    correctAnswer: "Tokyo",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    question: "What is the capital city of Japan?"
  },
  {
    correctAnswer: "Mars",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    question: "Which planet is known as the Red Planet?"
  },
  {
    correctAnswer: "William Shakespeare",
    options: ["Charles Dickens", "J.K. Rowling", "George Orwell", "William Shakespeare"],
    question: "Who wrote the play 'Romeo and Juliet'?"
  },
  {
    correctAnswer: "Au",
    options: ["Ag", "Au", "Gd", "Go"],
    question: "What is the chemical symbol for the element gold?"
  },
  {
    correctAnswer: "Italy",
    options: ["France", "China", "USA", "Italy"],
    question: "Which country is known for inventing the pizza?"
  }
];


// Accessing all the elements
const questionEl = document.getElementById("question");

const optionEL = document.getElementById("options");
const scoreEL = document.getElementById("score");
const nextEl = document.getElementById("next");

let score = 0;
let currentquestion = 0;
const totalScore = quesJSON.length;
showQuestion();

nextEl.addEventListener("click", () => {
  scoreEL.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

function showQuestion() {
  //Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentquestion];

  // Setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);

  shuffledOptions.forEach((opt) => {
    //Creating button
    const btn = document.createElement("button");
    //console.log("button")
    btn.textContent = opt;
    optionEL.appendChild(btn);

    //Event handling button

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score = score + 1;
      } else {
        score = score - 0.25;
      }
      console.log(score);

      scoreEL.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentquestion++;
  optionEL.textContent = "";
  if (currentquestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed!";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[j], options[i]] = [options[i], options[j]];
  }

  return options;
}
