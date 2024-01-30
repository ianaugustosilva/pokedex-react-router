import { render } from "@testing-library/react";
import Pikachu from "./Pikachu";

describe("Pikachu", () => {
  it("should render navbar, Pikachu image and text", () => {
    render(<Pikachu />);
  });
});
