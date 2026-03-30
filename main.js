const countElement = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = 0;

// plus
plusBtn.addEventListener("click", function () {
  count++;
  countElement.textContent = count;
});

// minus
minusBtn.addEventListener("click", function () {
  count--;
  countElement.textContent = count;
});