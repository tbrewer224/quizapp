//quiz question array
var questionsArray = [{
        question: "Who is the lead singer of the Fleet Foxes?",
        choices: ["Robin Pecknold", "Jamie Adkins", "Chris Rodrigo", "Tim Calman"],
        qNum: 0,
        correct: 0,
        },
    {
        question: "What is the name of the Fleet Foxes' second full-length album?",
        choices: ["A Promising Night", "A Sunlit Moon", "Helplessness Blues", "Waking Sleep"],
        qNum: 1,
        correct: 2,
        },
    {
        question: "In what city did Fleet Foxes get their start?",
        choices: ["Austin", "Nashville", "Phoenix", "Seattle"],
        qNum: 2,
        correct: 3,
        },
    {
        question: "What is the last song on the Fleet Foxes' self-titled album?",
        choices: ["Oliver James", "Mountain Prarie Song", "Lorelai", "White Winter Hymnal"],
        qNum: 3,
        correct: 0,
        }];

//global variables
var numberCorrect = 0;
var currentQuestion = 0;
var totalCorrect = 0;
var totalNumberOfQuestion = questionsArray.length;

//update question text
function questionDisplay() {

    $('#question').text(questionsArray[currentQuestion].question);
    $('#answers').empty();
    var totalNumberOfChoices = questionsArray[currentQuestion].choices.length;
    for (var i = 0; i < totalNumberOfChoices; i++) {
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestion].choices[i] + "<br><br>";
        $('#answers').append(buildEachChoiceHTML);
    }
};

$(document).ready(function () {

    //hide quiz and result section
    $('.quiz-section').hide();
    $('.result-section').hide();

    //start quiz
    $('#startQuizButton').click(function () {
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        questionDisplay();
    });

    //answer questions
    $('.quiz-section').on('click', '.option', function () {
        var userAnswer = $("input[class='option']:checked").val();
        var correctAnswer = questionsArray[currentQuestion].correct;
        if (userAnswer == correctAnswer) {
            totalCorrect++;
        }
        if ((currentQuestion + 1) == totalNumberOfQuestion) {

            $('#finalScore').text(totalCorrect + "/" + totalNumberOfQuestion);
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();

        } else {
            currentQuestion++;
            questionDisplay();
        }
    });

    //result page and try again
    $('.result-section').on('click', '#tryagain', function () {
        $('.result-section').hide();
        $('.quiz-section').hide();
        $('.start-section').show();
        numberCorrect = 0;
        currentQuestion = 0;
        totalCorrect = 0;
    })
});
