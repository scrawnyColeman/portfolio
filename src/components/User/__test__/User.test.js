import { render, screen } from "@testing-library/react";
import User from "..";

describe("<User />", () => {
  test("should render without crashing", () => {
    const { container } = render(<User />);
    expect(container).toBeTruthy();
  });
  test("should render user image", () => {
    render(<User />);
    expect(screen.getByAltText("user")).toBeInTheDocument();
  });
  test("should render name", () => {
    render(<User />);
    expect(screen.getByText("Thomas Hutchinson")).toBeInTheDocument();
  });
  test("should render slogan", () => {
    render(<User />);
    expect(
      screen.getByText("UI Enthusiast - Programmer - Problem Solver")
    ).toBeInTheDocument();
  });
});
