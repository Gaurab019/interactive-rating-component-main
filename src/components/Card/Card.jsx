import React, { useState } from "react";
import HeroCard from "../HeroCard/HeroCard";
import ResponseCard from "../ResponseCard/ResponseCard";
import "./CardStyle.css";

function Card() {
  const [ratedValue, setRateValue] = useState(0);
  return (
    <div>
      {ratedValue === 0 ? (
        <HeroCard setRate={setRateValue}></HeroCard>
      ) : (
        <ResponseCard rate={ratedValue}></ResponseCard>
      )}
    </div>
  );
}

export default Card;
