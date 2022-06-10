const quizDb =[
    {
        question: "Q1: What is the full form of HTML?",
        a: "hello to my land",
        b: "Hey text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans3",
    },
    {
        question:"What is the full form of CSS?",
        a: "Cascading style sheets",
        b: "Cascading style sheeps",
        c: "Cartoon style sheets",
        d: "Cascading super sheets",
        ans: "ans1",
    },
    {
        question:"What is the full form of JS?",
        a: "JavaSuper",
        b: "JavaScript",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans2",
    },
];

const questions = document.querySelector(".questions");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit= document.querySelector("#submit");

const answers=document.querySelectorAll(".answer");
let questionCount = 0;
let score=0;

const hideArea=document.querySelector(".hideArea");

const loadQuiz = ()=>{
    //console.log(questions.innerHTML =quizDb[0].question )

    const questionList=quizDb[questionCount];
    questions.innerHTML = questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;  
}
loadQuiz();

submit.addEventListener("click", ()=>{
    let checkedAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElm)=>{
        if(curAnsElm.checked){
            answer=curAnsElm.id;
            console.log(answer);
        }
       
           });
           if (answer == quizDb[questionCount].ans){
            score++;
            console.log("Score is: ", score);
        }
        questionCount++;
        if(questionCount <quizDb.length){
            loadQuiz();
        }
        else{
            showScore.innerHTML=`
            <h3>You have scored ${score} / ${questionCount} :)</h3>
            <button id="submit" onclick="location.reload()"> Play Again </button>
            `;
            hideArea.style.display="block";
        }
}
checkedAnswer();



});

