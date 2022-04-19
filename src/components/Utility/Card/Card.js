import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const cardClass = styles.card;
  return (
    <div className={`${cardClass} + ${props.className}`}>{props.children}</div>
  );
};

export default Card;
