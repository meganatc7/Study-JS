const btns = document.querySelectorAll(".btn");
const tabContents = document.querySelectorAll(".tab-content");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(btn.dataset.target).classList.add("active");
  });
});
