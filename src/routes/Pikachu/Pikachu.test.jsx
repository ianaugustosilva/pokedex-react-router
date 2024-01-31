import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pikachu from "./Pikachu";

describe("Pikachu", () => {
  it("should render navbar, Pikachu image and text", () => {
    render(<Pikachu />);

    const image = screen.getByRole("img", { name: /pikachu/i });
    expect(image).toBeInTheDocument();

    const text = screen.getByText(/pikachu/i);
    expect(text).toBeInTheDocument();
  });
});
