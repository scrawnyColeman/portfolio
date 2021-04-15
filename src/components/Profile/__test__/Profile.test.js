import { render, screen } from "@testing-library/react";
import Profile from "..";

describe("<Profile />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Profile />);
    expect(container).toBeTruthy();
  });
  test("should render 3 links", () => {
    render(<Profile />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });
  test("should render github and linked icon", () => {
    render(<Profile />);
    expect(screen.getByAltText("github")).toBeInTheDocument();
    expect(screen.getByAltText("linkedin")).toBeInTheDocument();
  });
  test("should render blurb", () => {
    render(<Profile />);
    expect(
      screen.getByText(
        "Excited by creative UI's and love to build clean, elegant solutions with modern JavaScript. You'll find me on the web masquerading as @scrawnyColeman"
      )
    ).toBeInTheDocument();
  });
});
