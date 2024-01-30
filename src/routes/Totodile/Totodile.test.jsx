import { render, screen } from "@testing-library/react";
import Totodile from "./Totodile";

describe("Totodile", () => {
  it("should render Totodile component", () => {
    render(<Totodile />);
    screen.getAllByAltText("totodile");
    screen.getByText("Totodile");
  });
});
