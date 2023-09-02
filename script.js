"use strict";
const feedback = document.getElementById("feedback_text");
const send = document.getElementById("submit");
const modal = document.getElementById("feedback_container");
const show = document.getElementById("alert");
const output = dcument.getElementById("output");


function SendFeedback() {
  if (feedback.value == "") {
    feedback.style.border = "1px solid red";
  } else {
    show.style.display = "block";
    show.classList.remove("hidden");
    revert.style.display = "none";
    window.location.href = "feedback.html";
    output.innerHTML = feedback.value;
  }
}

function display() {
  modal.style.display = "block";
  modal.classList.remove("hidden");
}

function hide() {
  modal.style.display = "none";
}
