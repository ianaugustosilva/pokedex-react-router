import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Router from "../../router/Router";

describe("Main Component", () => {
  //
  it("Should render main page(Pikachu)", () => {
    render(<Router />);
    const Pikachi = screen.getByRole("img", { name: /pikachu/i });
    expect(Pikachi).toBeInTheDocument();
  });

  it("Should show Bulbassaur page", () => {
    render(<Router />);
    const linkElement = screen.getByRole("link", { name: /bulbassaur/i });
    fireEvent.click(linkElement);

    const image = screen.getByRole("img", { name: /bulbassaur/i });
    expect(image).toBeInTheDocument();
  });

  it("Should show Totodile page", () => {
    render(<Router />);
    const linkElement = screen.getByRole("link", { name: /totodile/i });
    fireEvent.click(linkElement);

    const image = screen.getByRole("img", { name: /totodile/i });
    expect(image).toBeInTheDocument();
  });
});
