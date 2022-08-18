import "./ResponseCardStyle.css";
import thanks from "../../assets/thanks.svg";

function ResponseCard(props) {
  return (
    <div className="heroCard responseCard">
      <img src={thanks} alt="Thank You" className="thanksimage" />
      <div className="ratingInfo">
        <p className="ratingtext">
          You selected <span className="dynamicValue">{props.rate}</span> out of
          5
        </p>
      </div>
      <h1 className="heroText">Thank you!</h1>
      <p className="subText responseCardsubtext">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ResponseCard;
