import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("Should render Navbar component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbassaur")).toBeInTheDocument();
    expect(screen.getByText("Totodile")).toBeInTheDocument();
  });

  it("Should hit on links and navigate to respective page", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByRole("link", { name: /pikachu/i })).toBeInTheDocument();
  });
});
