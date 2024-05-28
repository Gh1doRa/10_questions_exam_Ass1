document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "1. What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris",
                d: "Lisbon"
            },
            correctAnswer: "c",
            score: 5
        },
        {
            question: "2. Which planet is known as the Red Planet?",
            answers: {
                a: "Earth",
                b: "Mars",
                c: "Jupiter",
                d: "Venus"
            },
            correctAnswer: "b",
            score: 5
        },
        {
            question: "3. Which one of the following is true?",
            answers: {
                a: "Programming is easy",
                b: "JS is not stressful at all",
                c: "C++ is very easy to read and understand",
                d: "Python is a low level language"
            },
            correctAnswer: "b",
            score: 5
        },

        {
            question: "4. Which are the equiments are needed for a programmer",
            answers: {
                a: "Mechinical RGB Keyboard",
                b: "Skills",
                c: "Coffee",
                d: "Multi Monitors"
            },
            correctAnswer: "c",
            score: 5
        },

        {
            question: "5. Why do you decided to join the field of IT",
            answers: {
                a: "Because it's easy",
                b: "Because it's not stressful at all",
                c: "The pay is good",
                d: "All of the above"
            },
            correctAnswer: "c",
            score: 5
        },

        {
            question: "6. People says programmers are single, why is that?",
            answers: {
                a: "Because, programmers have social anxiety ",
                b: "Programmers don't know how to talk to girls",
                c: "They are always inside their room without any social interactions",
                d: "All of the above"
            },
            correctAnswer: "d",
            score: 5
        },

        {
            question: "7. Why do you think she left you?",
            answers: {
                a: "Because she found someone better than you",
                b: "Because you are always talking about coding",
                c: "Because you would stay indoor, rather than going out with her",
                d: "All of the above"
            },
            correctAnswer: "a",
            score: 5
        },

        {
            question: "8. If you could start to learn coding again, which language would you start from?",
            answers: {
                a: "Assembly",
                b: "C++",
                c: "Rust",
                d: "Java"
            },
            correctAnswer: "d",
            score: 5
        },

        {
            question: "9. Which language is the easiest to understand?",
            answers: {
                a: "Java",
                b: "C++",
                c: "JS",
                d: "Machine language"
            },
            correctAnswer: "a",
            score: 5
        },

        {
            question: "10. What do you do when you are stuck in a section of a code",
            answers: {
                a: "Copy from stack overflow",
                b: "Copy from github",
                c: "Ask Chat GPT",
                d: "All of the above"
            },
            correctAnswer: "c",
            score: 5
        },
       
    ];

    function buildQuiz() {
        const output = [];
        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        let totalScore = 0;
        const scoreDetails = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                totalScore += currentQuestion.score;
                answerContainer.querySelector(`label input[value=${currentQuestion.correctAnswer}]`).parentElement.style.color = 'green';
                scoreDetails.push(`Question ${questionNumber + 1}: Correct (+${currentQuestion.score} points)`);
            } else {
                if (userAnswer) {
                    answerContainer.querySelector(`label input[value=${userAnswer}]`).parentElement.style.color = 'red';
                }
                answerContainer.querySelector(`label input[value=${currentQuestion.correctAnswer}]`).parentElement.style.color = 'green';
                scoreDetails.push(`Question ${questionNumber + 1}: Incorrect (0 points)`);
            }
        });

        resultsContainer.innerHTML = `
            <p>${numCorrect} out of ${quizQuestions.length}</p>
            <p>Total Score: ${totalScore}</p>
            <ul>${scoreDetails.map(detail => `<li>${detail}</li>`).join('')}</ul>
        `;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});
