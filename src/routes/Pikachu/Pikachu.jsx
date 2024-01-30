import React from "react";
import "./Pikachu.css";

const Pikachu = () => {
  return (
    <div className="container">
      <p>Pikachu</p>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        alt="pikachu"
        className="image"
      />
    </div>
  );
};

export default Pikachu;
