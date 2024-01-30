import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <p className="text">OPA! Não tem nadinha aqui...</p>
      <img
        src="https://www.nicepng.com/png/full/56-566307_pokemon-base-7-pikachu-with-a-question-by.png"
        alt="errorpage"
        className="image"
      />

      <a href="./" class="button">
        Voltar para a página inicial
      </a>
    </div>
  );
};

export default ErrorPage;
