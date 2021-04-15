import { render, screen } from "@testing-library/react";
import Education from "..";

describe("<Education />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Education />);
    expect(container).toBeTruthy();
  });
  test("should render Grad role", () => {
    render(<Education />);
    expect(screen.getByText("Graduate Software Engineer")).toBeInTheDocument();
  });
  test("should render MSc education", () => {
    render(<Education />);
    expect(screen.getByText("MSc Software Development")).toBeInTheDocument();
  });
  test("should render BSc education", () => {
    render(<Education />);
    expect(screen.getByText("BSc Economics")).toBeInTheDocument();
  });
});
