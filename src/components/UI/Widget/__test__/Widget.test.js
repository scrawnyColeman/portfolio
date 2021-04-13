import { render, screen } from "@testing-library/react";
import Widget from "..";

describe("<Widget />", () => {
  const props = {
    title: "Test Title"
  };
  test("should render without crashing", () => {
    const { container } = render(<Widget {...props} />);
    expect(container).toBeTruthy();
  });
  test("should render correct title", () => {
    render(<Widget {...props} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
  test("should render correct child element", () => {
    render(
      <Widget {...props}>
        <div>Test Child</div>
      </Widget>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
