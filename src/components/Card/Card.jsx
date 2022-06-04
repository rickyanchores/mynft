import React from "react";

const Card = (card) => {
  return (
    <div className="Card">
      <img src={card.image} alt="" />
      <h4 className="name">{card.name}</h4>
      <p>{card.text}</p>
    </div>
  );
};
export default Card;
