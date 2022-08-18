import React from "react";
import { useState } from "react";
import "./HeroCardStyle.css";
import StarIcon from "../../assets/icon-star.svg";
import RatingValues from "../RatingValues/RatingValues";

function HeroCard(props) {
  const [value, setValue] = useState(0);

  const clickSubmit = () => {
    console.log(value);
    value !== 0 ? props.setRate(value) : void 0;
  };

  return (
    <div className="heroCard ratingCard">
      <img src={StarIcon} alt="Star Icon" className="starIcon" />
      <h1 className="herotext">How did we do?</h1>
      <p className="subText">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingValues setValue={setValue}></RatingValues>
      {/* <RatingValues></RatingValues> */}
      <button className="submit" onClick={clickSubmit}>
        Submit
      </button>
    </div>
  );
}

export default HeroCard;
