import React from "react";
import classes from "../Card/card.module.css";

const Card = ({ title, backimage, frontimage, description }) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.back}>
          <img className={classes.imagesize} src={backimage} alt={title} />
        </div>
        <div className={classes.front}>
          <img className={classes.imagesize} src={frontimage} alt={title} />
        </div>
        <div>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>
      </div>

    </div>
  );
};

export default Card;
