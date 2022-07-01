const catgryName = document.getElementById("catgryName");
        let scores = document.getElementById('score');
        const questions = document.querySelector(".questions");
        const option1 = document.querySelector("#option1");
        const option2 = document.querySelector("#option2");
        const option3 = document.querySelector("#option3");
        const option4 = document.querySelector("#option4");
        const submit = document.querySelector("#submit");
        let answers = document.querySelectorAll('.answer');
        let options = document.querySelectorAll('.options');

        let questionCount = 0;
        async function loadQuiz() {
            let res = await fetch('https://the-trivia-api.com/api/questions?categories=general_knowledge,history,science,sport_and_leisure&limit=10&region=IN&difficulty=easy');
            console.log(res);
            let jsn = await res.json();
            console.log(jsn);
            // const data=jsn.question;
            // console.log(data);

            let questionList = jsn[questionCount];
            questions.innerHTML = questionList.question;
            catgryName.innerHTML = questionList.category;

            //generating options in random order
            let answerChoices = questionList.incorrectAnswers;
            console.log(answerChoices);
            let option = Math.floor(Math.random() * 3) + 1;
            let choice = answerChoices.splice(option, 0, questionList.correctAnswer);
            console.log(answerChoices);

            //assigning option values
            answerChoices.forEach((options) => {
                option1.innerHTML = answerChoices[0];
                option2.innerHTML = answerChoices[1];
                option3.innerHTML = answerChoices[2];
                option4.innerHTML = answerChoices[3];
            })

            submit.addEventListener('click', () => {
                console.log('clicked on button');
                let score = 0;
                let answer;
                scores.innerHTML = `${score}/${questionCount}`;
                let checkedAnswer = () => {
                    answers.forEach((curAns) => {
                        if (curAns.checked) {
                            answer = curAns.value;
                            console.log(answer);
                        }
                        console.log(questionList.correctAnswer);

                    });
                }
                checkedAnswer();

            });
        }
        loadQuiz();
