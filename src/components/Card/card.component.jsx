import React from "react";

import "./card.styles.css";

const CardComponent = ({
  startupName,
  startupDescription,
  investmentGoal,
  investmentMinimum,
  investmentDeadline,
  currentInvestmentTotal,
  author,
}) => {
  return (
    <div className="cardContainer">
      <h2 className="cardTitle">{startupName}</h2>
      <p className="cardDescription">{startupDescription}</p>
      <p className="otherInformation">Goal: ${investmentGoal}</p>
      <p className="otherInformation">
        Minimum Investment: ${investmentMinimum}
      </p>
      {author !== "Admin" ? (
        <p className="otherInformation">Author: {author}</p>
      ) : null}
      <p className="otherInformation">
        Investment deadline: {investmentDeadline}
      </p>
      <p className="otherInformation">
        Current Investment Total: ${currentInvestmentTotal}
      </p>
    </div>
  );
};

export default CardComponent;
