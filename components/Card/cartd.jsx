import React from "react";
import classes from "../Card/card.module.css";
import { useState,useRef } from 'react';

const Card = ({ title, backimage, frontimage, description }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  function handleMouseDown(event) {
    setIsDragging(true);
    const { x, y } = cardRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - x, y: event.clientY - y });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging) return;
    const { x, y } = cardRef.current.getBoundingClientRect();
    const newX = event.clientX - position.x - x;
    const newY = event.clientY - position.y - y;
    cardRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
  }

  const cardClass = isDragging ? `${classes.card} ${classes.dragging}` : classes.card;
  return (
    <div>
      <div className={cardClass} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} ref={cardRef}>
        <div className={classes.back}>
          <img className={classes.imagesize} src={backimage} alt={title} />
        </div>
        <div className={classes.front}>
          <img className={classes.imagesize} src={frontimage} alt={title} />
        <div className={classes.rightcontent}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
