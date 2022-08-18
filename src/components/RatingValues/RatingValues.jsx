import React from "react";
import "./RatingValuesStyle.css";

function RatingValues({ setValue }) {
  // function RatingValues() {
  function clickRate(e) {
    const rateValue = e.target.innerHTML;
    const ratings = document.querySelectorAll(".ratingValue");
    ratings.forEach((element, i) => {
      element.classList.remove("currElemntHover");
      if (i <= rateValue - 1) {
        element.classList.add("currElemntHover");
      }
    });
    setValue(rateValue);
    console.log(rateValue);
  }

  return (
    <div className="rating">
      <span
        className="ratingValue"
        onMouseEnter={mouseOnAction}
        onMouseLeave={mouseleftAction}
        onClick={clickRate}
      >
        1
      </span>
      <span
        className="ratingValue"
        onMouseEnter={mouseOnAction}
        onMouseLeave={mouseleftAction}
        onClick={clickRate}
      >
        2
      </span>
      <span
        className="ratingValue"
        onMouseEnter={mouseOnAction}
        onMouseLeave={mouseleftAction}
        onClick={clickRate}
      >
        3
      </span>
      <span
        className="ratingValue"
        onMouseEnter={mouseOnAction}
        onMouseLeave={mouseleftAction}
        onClick={clickRate}
      >
        4
      </span>
      <span
        className="ratingValue"
        onMouseEnter={mouseOnAction}
        onMouseLeave={mouseleftAction}
        onClick={clickRate}
      >
        5
      </span>
    </div>
  );
}

function mouseOnAction(e) {
  const prevElement = e.target.previousElementSibling;
  prevElement ? prevElement.classList.add("prevElemntHover") : void 0;
}

function mouseleftAction(e) {
  const prevElement = e.target.previousElementSibling;
  prevElement ? prevElement.classList.remove("prevElemntHover") : void 0;
}

export default RatingValues;
