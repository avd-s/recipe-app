import React from "react";
import style from "./recipe.module.css";

const Receipe = ({ Title, Calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{Title}</h2>
      <ol>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ol>
      <p>Calories:{Calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Receipe;
