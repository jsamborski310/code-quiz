var questionsData = [
    {
        question: "Two plus two, equals?",
        multipleChoices: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctAnswer: "Four"

        // },

        // {
        //     question: "Three plus three, equals?",
        //     multipleChoices: [
        //         "Five",
        //         "Six",
        //         "Seven",
        //         "Eight"
        //     ],
        //     correctAnswer: "Six"

        // }
        // ];

    }];

/////////////////////////////////////////

// Hides welcome message when the button is clicked.

//Variables

// var startGameButton = document.getElementById("#startGame");
// var welcome = document.querySelector(".welcomeMessage");

// startGame.addEventListener("click", function () {
//     //Hides the welcome.
//     welcome.setAttribute("style", "display:none;");


//     //Display game questions?
//     document.getElementById("gameQuestions").innerHTML = "Hello World"; //create the function then print it here?

// });

///////////////////////////////


var gameSection = document.getElementById("gameQuestions");


var multipleChoiceButtons = document.getElementById("multipleChoiceButtons");



var score = 0;

var currentQuestion = 0;
var choicesArrayIndex = [];


function displayQuestions() {


    // Pulling questionTitle div from HTML to Javascript.
    var questionTitle = document.getElementById("questionTitle");

    // Setting the quiz question to the questionTitle div in HTML.
    questionTitle.textContent = questionsData[currentQuestion].question;

    // Setting the program to run through the multiple choices in a specific question.
    for (var i = 0; i < questionsData[currentQuestion].multipleChoices.length; i++) {


        //Creating a button element for each multiple choice option.
        var choiceButton = document.createElement("button");

        // Adds the multiple choice text to the button.
        choiceButton.textContent = questionsData[currentQuestion].multipleChoices[i];

        // Adds multiple choice buttons to the HTML dynamically.
        multipleChoiceButtons.append(choiceButton);




        // Validates responses.
        if (questionsData[currentQuestion].multipleChoices[i] === questionsData[currentQuestion].correctAnswer) {
            choiceButton.setAttribute("correct", "yes");
            console.log("correct");
        } else {
            choiceButton.setAttribute("correct", "no");
            console.log("incorrect");
        }








        console.log(choiceButton);
    }

}
displayQuestions(questionsData);








//
//     if(response == questionsData[i].correctAnswer) {
//         score++;
//     } else {
//         console.log("wrong");
//     }
// }













        // questionTitle = "";
        // questionIndex = questionIndex + 1;
        // if (questionIndex < 0) {
        //     questionIndex = questionsData.length;
        // } else if (questionIndex > questionsData.length) {
        //     questionIndex = 0;
        // }
        // currentQuestion = questionsData.question[questionIndex];
        // return questionTitle;






    // function validateAnswer() {
    //     if (multipleChoice == correctAnswer) {
    //         score++;
    //     }
    //     else {
    //         result.textContent("Wrong");
    //     }
    // }

    // nextQuestion.addEventListener("click", function () {

    // });








// // Start displaying Game Questions.

    // for(var i = 0; i < questionsData.length; i++) {
    //     gameQuestions.textContent = gameQuestions.textContent + (questionsData[i].question) + (questionsData[i].multipleChoice);

    // }



//     if(multipleChoice===correctAnswer) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }


//     // return gameQuestionsList
//     // gameQuestionsList = function

//     // Do if/else statement first? Get all of the values, and then display? 
//     // if/else statement. If choice is === answer, then it's correct.


//     //add button event listener


//     // look into target element

//     // look into printing data










