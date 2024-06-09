const inputs = document.querySelectorAll(".input");
const home_btn = document.querySelector("#drivio-btn");

home_btn.addEventListener("click", () => {
  window.location.href = "index.html";
});
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
