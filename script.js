var times = 1;
var answers = document.querySelector('.answers');
var questions = document.querySelector('.questions');
var Submit = document.querySelector('.Submit');
var enter = document.querySelector('.enter');

function clearThis(target) {
        target.value= "";
}

function chat() {
    var ans = String(enter.value);
    if (times === 1) {
    answers.innerHTML = 'What do you want to do? | ' + ans + '<br>';
    questions.innerHTML = 'What is step 1 out of 3?';
    clearThis(enter);
    }
    else 
    if (times === 2) {
    answers.innerHTML += ('Step 1 | ' + ans);
    questions.innerHTML = 'What is step 2 out of 3?';
    clearThis(enter);
    }
    times++;
}

enter.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        Submit.click();
    }
});

Submit.addEventListener("click", chat);

