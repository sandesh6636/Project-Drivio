const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const home_btn = document.querySelector("#drivio-btn");

home_btn.addEventListener("click", () => {
  window.location.href = "index.html";
});
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  // container.style.zIndex = "6";
});
