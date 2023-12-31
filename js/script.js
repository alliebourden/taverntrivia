const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit-btn");
const continue_btn = document.querySelector(".buttons .test-btn");
const quiz_box = document.querySelector(".quiz-box");
const next_btn = quiz_box.querySelector(".next-button");
let question_count = 0;
let question_numb = 1;

// Start Button Click
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

// Exit Button Click
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// Continue Button Click
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeTrivia");
    showTrivia(0);
    questionCounter(1);
}

// NExt Button Click
next_btn.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_numb++
        showTrivia(question_count);
        questionCounter(question_numb);
    } else {
        console.log("Questions completed");
    }
}

function showTrivia(index) {
    const question_text = document.querySelector(".question-text");
    const option_list = document.querySelector(".answer-list");
    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
}

function questionCounter(index) {
    const bottom_question_counter = quiz_box.querySelector(".total-questions");
    let totalQuestionCount = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_question_counter.innerHTML = totalQuestionCount;
}