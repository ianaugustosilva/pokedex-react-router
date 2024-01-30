import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("should Error page render", () => {
    render(<ErrorPage />);
    screen.getAllByAltText("errorpage");
  });
});
