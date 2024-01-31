import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Totodile from "./Totodile";

describe("Totodile", () => {
  it("should render navbar, Totodile image and text", () => {
    render(<Totodile />);

    const image = screen.getByRole("img", { name: /totodile/i });
    expect(image).toBeInTheDocument();

    const text = screen.getByText(/totodile/i);
    expect(text).toBeInTheDocument();
  });
});
