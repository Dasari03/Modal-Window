const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const xBtn = document.querySelector(".xBtn");

for (let i = 0; i < btn.length; i++) {
  console.log(btn[i].textContent);
  btn[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

xBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
