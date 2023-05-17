import React from "react";
import classes from "../TarotContent/tarotcontent.module.css"

const CardContent = ({ title, description }) => {
  return (
    <div>
      <div className={classes.cardcontent}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default CardContent;