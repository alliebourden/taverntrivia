const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit-btn");
const continue_btn = document.querySelector(".buttons .test-btn");

// Start Button Click
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}