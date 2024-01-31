import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Bulbassaur from "./Bulbassaur";

describe("Bulbassaur Component", () => {
  it("should render Bulbassaur component", () => {
    render(<Bulbassaur />);

    // verifica se a imagem está presente
    const image = screen.getByRole("img", { name: /bulbassaur/i });
    expect(image).toBeInTheDocument();

    // verifica se o texto está presente
    const text = screen.getByText(/bulbassaur/i);
    expect(text).toBeInTheDocument();
  });
});
