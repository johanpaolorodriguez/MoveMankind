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
    <div class="cardContainer">
      <h2 class="cardTitle">{startupName}</h2>
      <p class="cardDescription">{startupDescription}</p>
      <p class="otherInformation">Goal: ${investmentGoal}</p>
      <p class="otherInformation">Minimum Investment: ${investmentMinimum}</p>
      {author !== "Admin" ? <p class="otherInformation">Author: {author}</p> : null}
      <p class="otherInformation">Investment deadline: {investmentDeadline}</p>
      <p class="otherInformation">Current Investment Total: ${currentInvestmentTotal}</p>
    </div>
  );
};

export default CardComponent;
