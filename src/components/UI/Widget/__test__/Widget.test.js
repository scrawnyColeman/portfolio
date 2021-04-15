import { render, screen } from "@testing-library/react";
import Widget from "..";

describe("<Widget />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Widget />);
    expect(container).toBeTruthy();
  });
  test("should render correct child element", () => {
    render(
      <Widget>
        <div>Test Child</div>
      </Widget>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
