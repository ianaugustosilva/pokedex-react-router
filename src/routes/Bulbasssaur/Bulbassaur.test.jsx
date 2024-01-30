import { render, screen } from "@testing-library/react";
import React from "react";
import Bulbassaur from "./Bulbassaur";

describe("Bulbassaur Component", () => {
  it("should render Bulbassaur component", () => {
    // verifica se a imagem está presente
    render(<Bulbassaur />);
    screen.getAllByAltText("bulbassaur");

    // verifica se tem o texto 'Bulbassaur' está presente
    screen.getByText("Bulbassaur");
  });
});
