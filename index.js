const ratingValue = document.querySelectorAll(".ratingValue");

let ratedValue;

ratingValue.forEach((element) => {
  element.addEventListener("mouseenter", mouseOnAction);
  element.addEventListener("mouseleave", mouseleftAction);
  element.addEventListener("click", clickRate);
});

function mouseOnAction(e) {
  const prevElement = e.target.previousElementSibling;
  prevElement ? prevElement.classList.add("prevElemntHover") : void 0;
}

function mouseleftAction(e) {
  const prevElement = e.target.previousElementSibling;
  prevElement ? prevElement.classList.remove("prevElemntHover") : void 0;
}

function clickRate(a) {
  const rateValue = a.target.innerHTML;
  const ratings = document.querySelectorAll(".ratingValue");
  ratings.forEach((element, i) => {
    element.classList.remove("currElemntHover");
    if (i <= rateValue - 1) {
      element.classList.add("currElemntHover");
    }
  });
  ratedValue = rateValue;
}

document.querySelector(".submit").addEventListener("click", showThankYouCard);

function showThankYouCard() {
  document.querySelector(".ratingCard").style.display = "none";
  document.querySelector(".responseCard").style.display = "flex";
  document.querySelector(".dynamicValue").innerHTML = ratedValue;
}
