import { render, screen } from "@testing-library/react";
import Technologies from "..";

describe("<Technologies />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Technologies />);
    expect(container).toBeTruthy();
  });
  test("should render 11 icons", () => {
    render(<Technologies />);
    expect(screen.getAllByRole("img")).toHaveLength(11);
  });
});
