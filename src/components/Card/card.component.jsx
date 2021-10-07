import React from "react";
import { Link } from "react-router-dom";

import "./card.styles.css";

const CardComponent = ({
  uid,
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
      <Link to={`/startups/${uid}`} className="cardTitle hover:text-gray-600">
        {startupName}
      </Link>
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
