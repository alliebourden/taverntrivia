const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit-btn");
const continue_btn = document.querySelector(".buttons .test-btn");
const quiz_box = document.querySelector(".quiz-box");

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
}