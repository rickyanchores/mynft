import React from "react";

const Card = (card) => {
  return (
    <div className="Card">
      <img src={card.image} alt="" />
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      <h4>{card.price}</h4>
    </div>
  );
};
export default Card;
