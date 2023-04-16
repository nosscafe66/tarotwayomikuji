import React from "react";
import classes from "../Card/card.module.css";

const Card = ({ title, image, description }) => {
  return (
    <div>
      <img className={classes.imagesize} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
