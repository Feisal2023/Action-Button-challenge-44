const btnPlus = document.querySelector(".fa-plus");
const btnMinus = document.querySelector(".fa-minus");
const fabBtns = document.querySelector(".fab-btns");

btnPlus.addEventListener("click", () => {
  fabBtns.classList.add("show");
  btnMinus.style.display = "block";
  btnPlus.style.display = "none";
});

btnMinus.addEventListener("click", () => {
  fabBtns.classList.remove("show");
  btnPlus.style.display = "block";
  btnMinus.style.display = "none";
});
